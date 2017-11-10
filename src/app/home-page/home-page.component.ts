import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // title = 'app';
  users = [];
  searchStr = ''

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
