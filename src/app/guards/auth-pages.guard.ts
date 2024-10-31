// pages子路由守卫
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute, CanActivateChild, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, mapTo, filter } from 'rxjs/operators';
import storage from '../utils/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthPagesGuard implements  CanActivateChild {
    //黑名单，哪些路由需要验证登录
    authList = ['/pages/library'];
    authUrl = '';

  /**
   * ctor
   * @param router 路由
   */
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    //监听路由
    this.router.events
    .pipe(filter((event: any) => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      // console.log(event);
      this.authUrl = event.url;
    })
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      // console.log('canActivateChild', this.activatedRoute.routeConfig?._loadedRoutes[0]?.children[0]);
      let token = storage.getItem('token') || '';
      if (token === '') {
        this.router.navigate(['/login/sign-in']);
        return false;
      } else {
        return true;
      }
  }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   // 判断是否有 token 信息
  //   let token = storage.getItem('token') || '';
  //   if (token === '') {
  //     this.router.navigate(['/login/sign-in']);
  //     return false;
  //   }

  //   // 判断是否可以访问当前连接
  //   let url: string = state.url;
  //   if (token.indexOf('admin') !== -1 && url.indexOf('/crisis-center') !== -1) {
  //     return true;
  //   }
  //   // this.router.navigate(['/login/sign-in']);
  //   return true;
  // }


}
