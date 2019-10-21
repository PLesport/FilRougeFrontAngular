import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
              private loginService: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginService.authenticate(this.username, this.password).subscribe(
      data => {
        console.log('Connecté');
        this.router.navigate(['']);
        this.invalidLogin = false;
      },
      error => {
        console.log('Non connecté');
        this.invalidLogin = true;
      }
    ));

  }

}
