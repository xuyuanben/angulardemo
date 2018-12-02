import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;

  constructor(private homeServer:HomeService,private router:Router,private message: NzMessageService) { }

  ngOnInit() {
  }
  logout() {
    // e.preventDefault();
    this.homeServer.logout().subscribe(res=>{
      localStorage.removeItem('loginToken')
      this.router.navigate(['/login'])
      this.message.create('success', `This is a message of success`);

    },err=>{
      this.message.create('error', `This is a message of error`);
    })

  }
}
