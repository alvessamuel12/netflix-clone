import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { MoviesScreenComponent } from './movies-screen/movies-screen.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "profiles", component: UsersComponent },
  { path: "browse", component: MoviesScreenComponent },
  { path: "home", component: HomeComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
