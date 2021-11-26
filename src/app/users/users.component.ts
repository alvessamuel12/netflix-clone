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
  // reponse = {
  //   "token" : "asçhdbcsabasb",
  //   "users" : [
  //     {
  //       "id" : 1,
  //       "name" : "Usuário 1",
  //       "avatarUrl" : "../assets/img/b40f9f8fc0fb88aabf2a8acbc39c0ac0 1.png"
  //     },
  //     {
  //       "id" : 2,
  //       "name" : "Usuário 2",
  //       "avatarUrl" : "../assets/img/b40f9f8fc0fb88aabf2a8acbc39c0ac0 2.png"
  //     }
  //   ]
  // }

  ngOnInit(): void {
    // this.showInfo();
    this.getDataUser()
  }

  ngDoCheck(){
    // console.log('ngDoCheck')
    // console.log(this.appService.layoutSize)
    this.localLayoutSize = this.appService.layoutSize
  }


  getDataUser(){
    const userDataJson = localStorage.getItem('users')
    if(userDataJson)this.users = [...JSON.parse(userDataJson)]
    console.log(this.users)
  }
  // showInfo() {
  //   this.appService.getUsers().subscribe(x => {
  //     // this.users = x.users;
  //     this.users = this.reponse.users as User[];
  //   });
  //   if(this.users[0]) { console.log(this.users[0]); }
  // }

  switchToUser(id : number, name: string) {
    this.router.navigate(['/browse'], { queryParams: { id: id, name: name } });
  }

}
