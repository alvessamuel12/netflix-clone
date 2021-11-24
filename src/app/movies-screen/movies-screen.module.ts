import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesScreenComponent } from './movies-screen.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MoviesScreenComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    MoviesScreenComponent
  ]
})
export class MoviesScreenModule { }
