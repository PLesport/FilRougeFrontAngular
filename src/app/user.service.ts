import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  private baseurl = 'http://localhost:8080/FilRougeBack/api';


  getUsers(): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json'
      })
    };
    return this.http.get<User[]>(this.baseurl + '/users', httpOptions);
  }

  postUser(user: User) {
    return this.http.post<User>(this.baseurl + '/user', user);
  }
}
