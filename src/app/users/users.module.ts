import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedmoduleModule
  ],
  exports: [
    UsersComponent,
  ]
})
export class UsersModule { }
