import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  // Guard used to check if the user is logged in. To access the profiles or browse pages, he must be logged in, otherwise he is redirected to the login page. To access the root or login pages, he must be logged out, otherwise he is redicted to the profiles page.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuth = Boolean(localStorage.getItem('token') && localStorage.getItem('users'))
      if (state.url === '/login' || state.url === '/') {
        if (isAuth) return this.router.parseUrl('/profiles')
        return true
      }
      if (isAuth) return true
      return this.router.parseUrl('/login')
    }
}
