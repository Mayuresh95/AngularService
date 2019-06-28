import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { error } from 'util';

@Component({
  selector: 'app-employee-name',
  template: `
    <h2>Employee-name list</h2>
    {{errorMsg}}
    <ul *ngFor = "let employee of employees">
      <li>{{employee.name}}</li>
    <ul>
  `,
  styleUrls: ['./employee-name.component.css']
})
export class EmployeeNameComponent implements OnInit {

  employees = [];
  errorMsg;

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees().
      subscribe(data => {this.employees = data},
               error => {this.errorMsg = error});
  }

}
