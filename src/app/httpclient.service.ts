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

/*      getUsers() {
      return this.httpClient.get<User[]>('http://localhost:8080/ProjetFilRouge2/api/users');
    }

    public deleteUser(user) {
      return this.httpClient.delete<User>('http://localhost:8080/ProjetFilRouge2/api/users' + '/' + employee.empId);
    }

    public createUser(user) {
      return this.httpClient.post<User>('http://localhost:8080/ProjetFilRouge2/api/users', employee);
    } */
}
