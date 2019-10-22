import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Users[] = [];

  constructor(private usersService: UsersService, private router: Router) { }
  ngOnInit() {
    this.usersService.getUsers().subscribe(result => {
      console.log(result);
      this.users = result;
      return;
    });
  }

}
