import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies-screen',
  templateUrl: './movies-screen.component.html',
  styleUrls: ['./movies-screen.component.scss']
})
export class MoviesScreenComponent implements OnInit {
  background:string = 'assets/img/banner.png'
  constructor() { }

  ngOnInit(): void {
  }

}
