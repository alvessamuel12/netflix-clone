import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'https://private-3923c4-santadercoders809.apiary-mock.com/'

  constructor(private httpClient: HttpClient) {}

  getUserData(loginParams: LoginParams) {
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'text/plain')
    const params = 'text=' + JSON.stringify(loginParams)
    return this.httpClient.post(this.baseUrl + 'login', {['email/telefone']: 'email', login: loginParams.login, senha: loginParams.password})
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