import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../services/employees.service";
import {Employees} from "../../models/employees";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {

  id: number ;
  employee : Employees;
  constructor(private employeeServ : EmployeesService , private activateRouter : ActivatedRoute ,private router : Router) { }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params['id'];
    console.log("id = ",this.id);

    this.employeeServ.getEmployeById(this.id).subscribe(data => {

      this.employee  = data ;

    } , error => {
      console.log("error occured ",error)
    });

  }


}
