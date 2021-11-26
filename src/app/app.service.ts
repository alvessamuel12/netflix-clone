import { Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, of } from 'rxjs';

// export interface DogResponse {
//     message: string[];
//     status: string;
// }

@Injectable({
    providedIn: 'root',
  }) 
  export class AppService {
    constructor(private http: HttpClient) {}
        
    baseUrl: string = 'https://private-3923c4-santandercoders809.apiary-mock.com/';
    usersData!: User[]

    getUsers() {
        return this.http.get(this.baseUrl).pipe(
            catchError(x => {
                console.log(x);
                return of('Ops ... Raça não encontrada.');
            })
        );
    }

    postUserData({login, password}: LoginParams) {
        const headers = new HttpHeaders({ContentType: 'text/plain'})
        // headers.append('responseType', 'text')
        // console.log(headers)
        // console.log(headers)
        // const params = 'text=' + JSON.stringify(loginParams)
        // const u = JSON.stringify(params)

        return this.http.post(this.baseUrl + 'login', {login, password}, {responseType: 'text'})
      }
}

interface LoginParams {
    login: string,
    password: string
  }
  
  interface User {
    id: number,
    name: string,
    avatarUrl: string
  }
  
  interface LoginData {
    token: string,
    users: User[]
  }

