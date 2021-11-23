import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesScreenComponent } from './movies-screen.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    MoviesScreenComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MoviesScreenComponent
  ]
})
export class MoviesScreenModule { }
