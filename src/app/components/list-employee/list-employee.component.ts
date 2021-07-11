import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../services/employees.service";
import {Employees} from "../../models/employees";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees : Employees[];
  constructor(private employeServ : EmployeesService, private  router : Router,private activateRouter :ActivatedRoute) { }

  ngOnInit(): void {

    this.getEmployee();

  }

  goToUpdateComponent(id : number) {
    this.router.navigate(['update', id])
  }


  gotoDetailComponent(id:number) {
    this.router.navigate(['detail', id])

  }
  getEmployee() {
    this.employeServ.getEmployeList().subscribe(data => {

      this.employees = data;
    } )
  }

  deleteEmployee(id:number) {


    if( confirm("Voullez vous supprimer cette employee ")) {
      this.employeServ.deleteEmployee(id).subscribe(data=> {
      });
     window.location.reload();

    }

  }
}
