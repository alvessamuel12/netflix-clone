import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, takeUntil, Subject, Subscription } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


@Injectable({
    providedIn: 'root',
  })
  export class AppService {
    destroyed = new Subject<void>()
    layoutSize = ''
    Subscription1:Array<Subscription>= []
    displayNameMap = new Map([
      [Breakpoints.XSmall, 'XSmall'],
      [Breakpoints.Small, 'Small'],
      [Breakpoints.Medium, 'Medium'],
      [Breakpoints.Large, 'Large'],
    ]);
    constructor(private http: HttpClient, private breakpointObserver: BreakpointObserver)
 {
      breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
      ]).pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        Object.keys(result.breakpoints).forEach(element => {
          if (result.breakpoints[element]){
            this.layoutSize = this.displayNameMap.get(element) ?? 'Unknown';
          }
        });
      })
    }
    baseUrl: string = 'https://private-3923c4-santandercoders809.apiary-mock.com/';
    getUsers() {
      return this.http.get(this.baseUrl).pipe(
        catchError(x => {
          console.log(x);
          return of('Ops ... Raça não encontrada.');
        })
        );
      }

      // Post to get users data
    requestLogIn(params: LoginParams) {
        return this.http.post<LoginData>(this.baseUrl + 'login', params)
      }
      // request array of series
      getArraySeries(id:string) {
          return this.http.get(this.baseUrl + `users/` + id)
      }

      // request series data
    getDataSeries(seriesArray:Number[]) {
    return seriesArray.map(seriesId => {
      return this.http.get(this.baseUrl + `series/` + seriesId)
    })
  }
}

interface LoginParams {
  login: string,
  password: string
}

export interface User {
    id: number,
    name: string,
    avatarUrl: string
}

interface LoginData {
    token: string,
    users: User[]
}

