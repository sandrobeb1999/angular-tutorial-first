import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

interface IPayload {
  name: {
    type: string,
    required: true
  },
  salary: {
    type: number,
    required: true
  },
  age: {
    type: number,
    required: true
  }
}

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {
  employeeRegister;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private employeesService: EmployeesService) {
    this.employeeRegister = formBuilder.group({
      name: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      age: ['', [Validators.required]],
    })
  }


  ngOnInit() {

  }

  onSubmit(value) {
    this.employeesService.addEmployees(value);
    window.alert("Employee Registered!");
    this.router.navigate(['employees']);
  }
}
