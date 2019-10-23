import { Component, OnInit } from '@angular/core';
import { User } from '../User';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-user-modifier',
  templateUrl: './user-modifier.component.html',
  styleUrls: ['./user-modifier.component.scss']
})
export class UserModifierComponent implements OnInit {

  userModel = new User('', '', '', '', '', '', '', '', '', 0);

  //constructor(userService: UserService) { }

  ngOnInit() {
  }
  onSubmit() {
    // this.userService.postUser(this.userModel)
   //  .subscribe(
   //   data => console.log('Success!', data),
   //   error => console.log('Error!', error)
    // );
     }
}
