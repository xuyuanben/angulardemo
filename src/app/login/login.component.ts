import { Component, OnInit } from '@angular/core';
import {
  // AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { formatNumber } from '@angular/common';
interface Token {
  token:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder,private loginserver:LoginService,private router:Router) {
  }

  loginForm: FormGroup;

  submitForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[ i ].markAsDirty();
      this.loginForm.controls[ i ].updateValueAndValidity();
    };
    if(!this.loginForm.valid) {
      alert('验证失败');
      return
    }
    const {userName,password} = this.loginForm.value;
    const loginParam= {
      username:userName,
      password
    };
    this.loginserver.login(loginParam).subscribe((res:Token)=>{
      console.log(res)
      localStorage.setItem('loginToken', res.token)
      this.router.navigate(['/home'])
    })
  }

  

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [ null, [ Validators.required,Validators.minLength(2),Validators.maxLength(8) ] ],
      password: [ null, [ Validators.required , Validators.pattern(/^[a-zA-Z0-9]{3,6}$/)] ],
      // remember: [ true ]
    });
  }
}
