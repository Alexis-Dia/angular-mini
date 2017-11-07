import { Component } from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {
  // title = 'app';
  users = [];

  constructor(private usersService: UsersService) {
    //this.users = this.usersService.users
  }

  /*Best practise insted constructor in constructor use this component*/
  ngOnInit () {
    /*this.users = this.usersService.users*/
    this.usersService.getUsers().subscribe(users => {
      /*console.log(users);*/
      this.users = users;
    });
  }

}
