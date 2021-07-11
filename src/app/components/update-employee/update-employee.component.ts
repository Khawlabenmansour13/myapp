import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../services/employees.service";
import {Employees} from "../../models/employees";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {


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

  updateEmployee() {
    this.employeeServ.updateEmployee(this.id, this.employee)
      .subscribe(data => {

        console.log(data);
      })
    this.goToList();
  }


  onSubmit() {
    this.updateEmployee();
  }


  goToList() {
    this.router.navigate(['']);

  }



}
