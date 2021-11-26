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

  }
  ngDoCheck(){
    this.localLayoutSize = this.appService.layoutSize
  }

}
