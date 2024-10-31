import { Component, OnInit  } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  validateForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private userService: UserService, private router: Router) {}

  //表单校验
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

  //注册
  register(){
    // console.log(this.validateForm.value)
    this.userService.apiRegister(this.validateForm.value)
    .subscribe((res: any)=>{
      console.log(res.msg)
      if(res.code == 200 || 201){
        setTimeout(()=>{
          this.router.navigate(['/login/sign-in'])
        },600)

      }
    })
  }

  ngOnInit(): void {
    //表单校验
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      nickname: [null, [Validators.required]],
      remember: [true]
    });
  }


}
