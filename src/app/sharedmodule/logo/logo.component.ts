import { AppService } from './../../app.service';
import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit, DoCheck {
  localLayoutSize = ''
  @Input() logoInitWidth = ''
  constructor(private appService:AppService) { }

  ngOnInit(): void {
    console.log(this.logoInitWidth)
  }
  ngDoCheck(){
    // console.log('ngDoCheck')
    // console.log(this.appService.layoutSize)
    this.localLayoutSize = this.appService.layoutSize
  }

}
