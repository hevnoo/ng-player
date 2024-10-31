import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { filter, catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
import storage from '../utils/storage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request)
    const copyReq = request.clone({
      //设置baseUrl
      url: `http://127.0.0.1:8282${request.url}`,
      // 设置请求头
      // headers: request.headers.set('token', 'my-auth-token2').set('self-header', 'test2')
      headers: request.headers.set('Authorization', `Bearer ${storage.getItem('token')}`)
      //`Bearer ${token}`
    });
    return next.handle(copyReq).pipe(
      catchError(err => this.handleError(err))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // 出现客户端或网络错误。相应地处理。
      console.error('An error occurred:', error.error);
    } else {
      // 后端返回了一个不成功的响应代码。
      // 响应主体可能包含出现问题的线索。
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // 返回带有面向用户的错误消息的可观察结果。
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


}
