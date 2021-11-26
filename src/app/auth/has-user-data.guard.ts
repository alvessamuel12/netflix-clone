import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HasUserDataGuard implements CanActivate {
  constructor(private router: Router) {}

  // Guard used to check if there are the id and name variables in the query parameters (User is selected) when trying to access the browse page. If not, the user is redirected to the profiles page to select the user.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.queryParams['id'] && route.queryParams['name']) return true
    return this.router.parseUrl('/profiles')
  }
  
}
