import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeService {
  linkApi = 'https://dummy.restapiexample.com/api/v1/employees';
  constructor(private http: HttpClient) {}

  getEmployee() {
    return this.http
      .get('https://dummy.restapiexample.com/api/v1/employees')
      .toPromise()
      .then((res) => <any[]>JSON.parse(JSON.stringify(res)).data)
      .then((data) => {
        return data;
      });
  }
}
