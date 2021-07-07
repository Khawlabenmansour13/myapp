import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employees} from "../models/employees";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private  baseUrl ="http://localhost:8085/SpringMVC/servlet/employee/";
  private urlgetAllEmployess = "get-all-employee";
  private urladdEmployees = "add";
  private urlDeleteEmployees ="delete-employee"
  private urlUpdateEmployees ="update-employee"
  private urlgetByIdEmployees ="get-employeebyId"
  private urlgetByNameEmployees ="get-employeebyName"
  constructor(private client : HttpClient) { }


  getEmployeList() : Observable<Employees[]> {

    return this.client.get<Employees[]>(`${this.baseUrl}`+`${this.urlgetAllEmployess}`);

  }
  createEmployee(employee : Employees) : Observable<Object>{
    return  this.client.post(`${this.baseUrl}`+`${this.urladdEmployees}`,employee);

   }

  deleteEmployee(id : number) : Observable<Object> { // object car  msg de ResponseEntity  cest un object
    return this.client.delete(`${this.baseUrl}` + `${this.urlDeleteEmployees}/${id}` );
  }


  updateEmployee(id : number , employee : Employees) : Observable<Object> { // object car  msg de ResponseEntity  cest un object
    return this.client.put(`${this.baseUrl}` + `${this.urlUpdateEmployees}/${id}`, employee );
  }
  getEmployeById(id : number) : Observable<Employees> {

    return this.client.get<Employees>(`${this.baseUrl}` + `${this.urlgetByIdEmployees}/${id}` );

  }

  getEmployeByName(name  : string) : Observable<Employees> {

    return this.client.get<Employees>(`${this.baseUrl}` + `${this.urlgetByNameEmployees}/${name}` );

  }





}
