import { Component, OnInit, DoCheck} from '@angular/core';
import { AppService, User } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit, DoCheck{

  constructor(private appService: AppService, private router: Router) {  }
 localLayoutSize = ''
 logoInitWidth = '10.31em'
  users : User[] = [];

  ngDoCheck(){

    this.localLayoutSize = this.appService.layoutSize
  }

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
