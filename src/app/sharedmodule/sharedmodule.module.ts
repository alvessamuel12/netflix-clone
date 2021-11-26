import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    LoadingComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoadingComponent,
    LogoComponent
  ]
})
export class SharedmoduleModule { }
