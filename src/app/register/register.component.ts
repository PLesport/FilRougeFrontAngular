import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

userModel = new User('', '', '', '', '', '', '', '', '', 0);

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onSubmit() {
   this.userService.postUser(this.userModel)
    .subscribe(
     data => console.log('Success!', data),
     error => console.log('Error!', error)
   );
    }

}
