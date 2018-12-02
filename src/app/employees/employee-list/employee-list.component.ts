import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service'
import { Employee } from '../employee.type';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeesService: EmployeesService,private message: NzMessageService) { }
  employeesList: Employee[] =[];
  fetchData() {
    this.employeesService.fetchData().subscribe((res: Employee[]) => {
      console.log(res);
      this.employeesList = res
    })
  }
  
  trackByEmpid(index: number,employee: Employee) {
    return employee.id

  };
  handleDel(id: number) {
    this.employeesService.handleDel(id).subscribe(res=>{
      this.message.create('success', `success`);
      console.log(res)
      this.fetchData();

    },err=>{
      this.message.create('error', `删除失败，请稍后再试`);
    })

  }
  handleCancel() {
    this.message.info('取消删除');
  }
  ngOnInit() {
    this.fetchData()
  }

}
