import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
        
    usersUrl: string = 'https://private-3923c4-santandercoders809.apiary-mock.com/';
    

    getUsers() {
        let url:string = this.usersUrl;
        // console.log(url);
        return this.http.get(url).pipe(
            catchError(x => {
                console.log(x);
                return of('Ops ... Raça não encontrada.');
            })
        );
    }
}

