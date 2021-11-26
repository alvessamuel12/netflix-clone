import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    LayoutModule,
    SharedmoduleModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
