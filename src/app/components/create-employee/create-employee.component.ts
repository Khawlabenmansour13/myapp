import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../services/employees.service";
import {Employees} from "../../models/employees";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private employeService :EmployeesService) { }

  employee : Employees = new Employees();
  ngOnInit(): void {
  }

  saveEmploye() {
    this.employeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);

    });



  }

  onSubmit(){
    this.saveEmploye();
  }

}
