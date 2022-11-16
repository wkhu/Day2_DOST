import { Component } from '@angular/core';
import { EmployeesService } from '../services/employees.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private myService:EmployeesService) {}

  employees = this.myService.employees;

}
