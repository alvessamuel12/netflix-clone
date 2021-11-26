import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


interface User {
  "id" : 0,
  "name" : '',
  "avatarUrl" : ''
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  constructor(private appService: AppService) {  }

  users : User[] = [];
  reponse = {
    "token" : "asçhdbcsabasb",
    "users" : [
      {
        "id" : 1,
        "name" : "Usuário 1",
        "avatarUrl" : "../assets/img/b40f9f8fc0fb88aabf2a8acbc39c0ac0 1.png"
      },
      {
        "id" : 2,
        "name" : "Usuário 2",
        "avatarUrl" : "../assets/img/b40f9f8fc0fb88aabf2a8acbc39c0ac0 2.png"
      }
    ]
  }

  ngOnInit(): void {
    this.showInfo();
  }

  showInfo() {
    this.appService.getUsers().subscribe(x => {
      // this.users = x.users;
      this.users = this.reponse.users as User[];
    });
    if(this.users[0]) { console.log(this.users[0]); }
  }

}
