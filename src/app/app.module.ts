import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module'

import { AppComponent } from './app.component';
import { MoviesScreenModule } from './movies-screen/movies-screen.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    MoviesScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
