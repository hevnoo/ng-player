import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, RouterStateSnapshot, UrlTree, Router , CanMatchFn } from '@angular/router';
import { Observable } from 'rxjs';
import storage from '../utils/storage';
import { UserService } from '../api/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // 权限控制逻辑如 是否登录/拥有访问权限
    // console.log('canActivate', route);
    // const isLogin = storage.getItem('token') ? true : false;
    if(this.userService.token){
        return true;
    } else {
      this.router.navigate(['login/sign-in']);
      return false
    }
    // if (!isLogin) {
    //   console.log('没有权限');
    //   this.router.navigateByUrl('sign-in');
    //   return false;
    // } else {
    //   this.router.navigate(['pages/home'])
    //   return true;
    // }

  }

}
