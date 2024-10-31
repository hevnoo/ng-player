import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import storage from '../utils/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token = '' || storage.getItem('token')
  userInfo: any = null || storage.getItem('userInfo')

  constructor(private http: HttpClient) { }

  //获取用户列表
  getInfo(){
    const url = "/api/user/info";
    return this.http.get<any>(url);
  }
  //登录
  apiLogin(data: any) {
    const url = "/api/user/login";
    return this.http.post(url, data)
  }
  //注册
  apiRegister(data: any) {
    const url = "/api/user/register";
    return this.http.post(url, data)
  }

}
