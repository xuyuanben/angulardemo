import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { loginType } from './login.type';
import { URL } from '../config'
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(loginForm) {
   return this.http.post(`${URL}/tokens`,loginForm,{
     headers:{
       'No-Auth':'true'
     }
   })
  }
}
