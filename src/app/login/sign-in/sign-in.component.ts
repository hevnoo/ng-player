import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from 'src/app/api/user.service';
import storage from 'src/app/utils/storage';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  validateForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private router: Router, private userService: UserService) {}

  //表单验证
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  //登录
  login(){
    this.userService.apiLogin(this.validateForm.value)
    .subscribe((res: any)=>{
      // console.log(res);
      this.userService.token = res.token;
      storage.setItem('token',res.token);
      this.userService.userInfo = res.token;
      storage.setItem('userInfo',res.userInfo);
    })
    setTimeout(()=>{
      this.router.navigate(['/pages/home'])
    },300)

  }

  ngOnInit(): void {
    //表单验证
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
