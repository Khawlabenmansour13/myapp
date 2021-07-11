import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";
import {ListEmployeeComponent} from "./components/list-employee/list-employee.component";
import {UpdateEmployeeComponent} from "./components/update-employee/update-employee.component";
import {DetailEmployeeComponent} from "./components/detail-employee/detail-employee.component";


const routes: Routes = [
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', component: ListEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'detail/:id', component: DetailEmployeeComponent },
]
@NgModule({


  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
