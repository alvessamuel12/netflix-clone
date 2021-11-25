import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesScreenComponent } from './movies-screen.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    MoviesScreenComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    LayoutModule
  ],
  exports: [
    MoviesScreenComponent
  ]
})
export class MoviesScreenModule { }
