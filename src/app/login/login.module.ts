import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedmoduleModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
