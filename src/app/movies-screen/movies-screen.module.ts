import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesScreenComponent } from './movies-screen.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';
import { CardModalComponent } from './card-modal/card-modal.component';
import { MyTimePipe } from './my-tyme.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [
    MoviesScreenComponent,
    CardModalComponent,
    MyTimePipe,
    CardListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    SharedmoduleModule
  ],
  exports: [
    MoviesScreenComponent
  ]
})
export class MoviesScreenModule { }
