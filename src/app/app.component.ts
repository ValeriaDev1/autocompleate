import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilterService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [FilterService],
})
export class AppComponent {
  [x: string]: any;
  followingsM: NgModule;
  selectedEmployees: NgModule;
  flowings: any;

  employees = [
    {
      id: 128903,
      name: 'kiran',
      email: 'kiran@gmail.com',
      department: 'Account',
      category: [{ type: 'one', fom: 'May 2021', to: 'December 2022' }],
    },
    {
      id: 239877,
      name: 'john',
      email: 'jhon@gmail.com',
      department: 'Sales',
      category: [{ type: 'one', fom: 'April 2021', to: 'December 2022' }],
    },
    {
      id: 99373789293,
      name: 'frank',
      email: 'frank@gmail.com',
      department: 'Hr',
      category: [{ type: 'one', fom: 'March 2021', to: 'December 2022' }],
    },
  ];
  employees2: any[];
  filteredEmployees: any[];
  constructor(private http: HttpClient) {
    setTimeout(() => {
      this.http
        .get('https://dummy.restapiexample.com/api/v1/employees')
        .subscribe(
          (data: any) => {
            this.employees2 = data['data'];
          },
          (error) => {}
        );
    }, 200);
  }
  filterEmployee(eventd) {
    let filtered: any[] = [];
    let query = eventd.query;
    console.log(this.employees2);
    for (let i = 0; i < this.employees2.length; i++) {
      let employee = this.employees2[i];
      if (
        employee.employee_name.toLowerCase().indexOf(query.toLowerCase()) == 0
      ) {
        filtered.push(employee);
      }
    }
    this.filteredEmployees = filtered;
  }

  search(event): void {
    this.flowings = this.employees.filter((c) =>
      c.name.startsWith(event.query)
    );
    console.log(this.flowings);
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
  }
  
}
