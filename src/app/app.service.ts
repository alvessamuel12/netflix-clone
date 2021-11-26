import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';


@Injectable({
    providedIn: 'root',
  }) 
  export class AppService {
    constructor(private http: HttpClient) {}
        
    baseUrl: string = 'https://private-3923c4-santandercoders809.apiary-mock.com/';

    getUsers() {
        return this.http.get(this.baseUrl).pipe(
            catchError(x => {
                console.log(x);
                return of('Ops ... Raça não encontrada.');
            })
        );
    }

    postUserData(params: LoginParams) {
        return this.http.post<LoginData>(this.baseUrl + 'login', params)
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

