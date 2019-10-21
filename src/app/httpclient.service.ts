import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(
    private httpClient: HttpClient
  ) {
     }

     getEmployees() {
      return this.httpClient.get<User[]>('http://localhost:8080/ProjetFilRouge2/api/users');
    }

    public deleteEmployee(employee) {
      return this.httpClient.delete<User>('http://localhost:8080/ProjetFilRouge2/api/users' + '/' + employee.empId);
    }

    public createEmployee(employee) {
      return this.httpClient.post<User>('http://localhost:8080/ProjetFilRouge2/api/users', employee);
    }
}
