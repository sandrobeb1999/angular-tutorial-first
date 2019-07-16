import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { state, trigger, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        top: '200px'
      })),
      state('close', style({
        top: '-300px'
      })),
      transition('open <=> close', [
        animate('0.4s')
      ])
    ])
  ]
})
export class EmployeeComponent implements OnInit {

  employees$;
  employee;
  pop = false;


  constructor(private employeesService: EmployeesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(value => {
      const employeeId = +value.get('id');
      this.employeesService.getEmployeeById(employeeId).subscribe(employee => {
        this.employee = employee;
        if (!this.employee) {
          router.navigate(['error']);
        }
      });

    });
  }



  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();
  }

  deleteEmployee() {
    this.employeesService.deleteEmployee(this.employee.id).subscribe(emp => { this.router.navigate(['/employees']) });
  }

  popUp() {
    this.pop = true;
  }

  hide() {
    this.pop= false;
  }
}


