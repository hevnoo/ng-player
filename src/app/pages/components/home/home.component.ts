import { Component } from '@angular/core';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userInfo: any = ''

  constructor(private userService: UserService){}

  async getUer(){
    this.userService.getInfo()
    .subscribe((res)=>{
      console.log(res)
      this.userInfo = res
    })
    console.log(this.userInfo)
  }
}
