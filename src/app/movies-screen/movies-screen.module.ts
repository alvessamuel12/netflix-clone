import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesScreenComponent } from './movies-screen.component';



@NgModule({
  declarations: [
    MoviesScreenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MoviesScreenComponent
  ]
})
export class MoviesScreenModule { }
