import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard'
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'employee',
        loadChildren:'./employees/employees.module#EmployeesModule'
      }
    ]
  },
  {
    path: 'login',
    component:LoginComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
