import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'https://private-3923c4-santadercoders809.apiary-mock.com/'

  constructor(private httpClient: HttpClient) {}

  getUserData(loginParams: LoginParams) {
    const headers = new HttpHeaders({'Content-Type': 'text/plain', responseType: 'text/plain'})
    const body = JSON.stringify(loginParams)
    return this.httpClient.post<LoginData>(this.baseUrl + 'login', body, { headers: headers})
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