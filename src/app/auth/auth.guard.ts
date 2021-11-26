import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(route.queryParams)
      const isAuth = Boolean(localStorage.getItem('token') && localStorage.getItem('users'))
      if (state.url === '/login' || state.url === '/') {
        if (isAuth) return this.router.parseUrl('/profiles')
        return true
      }
      if (state.url === '/browse' && isAuth) {
        const hasUserIdAndName = Boolean(route.queryParams['id'] && route.queryParams['name'])
        if (hasUserIdAndName) return true
        return this.router.parseUrl('/profiles')
      }
      if (isAuth) return true
      return this.router.parseUrl('/login')
  }
  
}
