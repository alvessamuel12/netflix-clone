import { Component, OnInit } from '@angular/core';
import { User } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  constructor(private router: Router) {  }

  users : User[] = [];
  
  ngOnInit(): void {
    this.getDataUser();
  }

  getDataUser() {
    const userDataJson = localStorage.getItem('users');
    if(userDataJson)this.users = [...JSON.parse(userDataJson)];
    console.log(this.users);
  }

  switchToUser(id : number, name: string) {
    this.router.navigate(['/browse'], { queryParams: { id: id, name: name } });
  }

}
