import { Component } from '@angular/core';
import storage from 'src/app/utils/storage';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  userInfo: any = this.userService.userInfo[0];
  token = this.userService.token;

  // @Output() collapsed = new EventEmitter<boolean>();

  constructor(private userService: UserService){ };

  //监听数据变化
  ngDoCheck(): void {
    this.token = this.userService.token;
    // console.log('changes', this.userService.userInfo)
  }

  toLogin(){
    window.localStorage.clear();
    window.sessionStorage.clear();
  }
}
