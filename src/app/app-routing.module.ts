import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { MoviesScreenComponent } from './movies-screen/movies-screen.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "profiles", component: UsersComponent, canActivate: [AuthGuard] },
  { path: "browse", component: MoviesScreenComponent, canActivate: [AuthGuard] },
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "**", component: UsersComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
