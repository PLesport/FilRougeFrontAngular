import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }
  // tslint:disable-next-line: adjacent-overload-signatures
  ngOnInit() {
    this.userService.getUsers().subscribe(result => {
      console.log(result);
      this.users = result;
      return;
    });
  }

}
