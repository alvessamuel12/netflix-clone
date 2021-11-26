import { AppService } from './../app.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , DoCheck{

  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  constructor(private router: Router, private appService:AppService) {

  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.currentScreenSize = this.appService.layoutSize
  }

  getNextPage() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['profiles'])
    }
    else {
      this.router.navigate(['login'])
    }

  }

}
