import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './User';

export class UserStatus {
  constructor(
    public status: string,
  ) { }

}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User;
  password: string;
  username: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  authenticate(username, password) {
    /* if (username === 'admin' && password === 'password') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    } */
    console.log(username);
    console.log(password);
    this.username = username;
    this.password = password;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get('http://localhost:8080/FilRougeBack/api/users/validateLogin', { headers }).pipe(
      map(
        userData => {
          console.log(userData);
          sessionStorage.setItem('username', username);
          const authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }
      )

    );
  }


  getRole() {
    // return localStorage.getItem("role");
    return JSON.parse(localStorage.getItem('role'));
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  getCurrentUser() {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.get('http://localhost:8080/FilRougeBack/api/users/validateLogin', { headers });
  }

  removeToken() {
    return localStorage.removeItem('token');
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
