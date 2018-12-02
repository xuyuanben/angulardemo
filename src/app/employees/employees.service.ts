import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  URL } from '../config'
import { Employee } from './employee.type'
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  fetchData() {
    // const token = localStorage.getItem('loginToken')
   return this.http.get<Employee[]>(`${URL}/employees`,
  //  {
  //     headers: { Authorization: `Bearer ${token}` }
  //   }
    )
  };
  handleDel(id: number) {
    // const token = localStorage.getItem('loginToken')
    return this.http.delete(`${URL}/employees/${id}`,
    // {
    //    headers: { Authorization: `Bearer ${token}` }
    //  }
     )
  }

}
