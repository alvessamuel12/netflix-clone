import { AppService } from './../../app.service';
import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements DoCheck {
  localLayoutSize = ''
  @Input() logoInitWidth = ''
  constructor(private appService:AppService) {}

  ngDoCheck(){
    this.localLayoutSize = this.appService.layoutSize
  }
}
