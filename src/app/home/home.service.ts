import { Injectable } from '@angular/core';
import {URL} from '../config';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  logout() {
    // const token = localStorage.getItem('loginToken');
   return this.http.delete(`${URL}/tokens`,
  //  {
  //   headers: { Authorization: `Bearer ${token}` }
  //  }
   )

  }
}
