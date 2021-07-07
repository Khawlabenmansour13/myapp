import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";


const routes: Routes = [
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/create', pathMatch: 'full' },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
