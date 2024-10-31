import { Component, Output, EventEmitter } from '@angular/core';
import storage from 'src/app/utils/storage';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userInfo: any = this.userService.userInfo[0];

  // @Output() collapsed = new EventEmitter<boolean>();

  constructor(private userService: UserService){ };

  //监听数据变化
  ngDoCheck(): void {
    // console.log('changes', this.userService.userInfo)
  }

  toLogin(){
    window.localStorage.clear();
    window.sessionStorage.clear();
  }

}
