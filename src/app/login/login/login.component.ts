import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  recaptchaHidden = true

  dataForm = this.fb.group({
    login: ['', [Validators.required, Validators.email || Validators.pattern(/^(?!(\d)\1{10})\d{11}$/)]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]]
  })

  // API: BASE URL: https://private-3923c4-santadercoders809.apiary-mock.com/
  // POST /login Payload: email/telefone, senha
  // Response: Token do login e Array com os usuários atrelados àquele Login

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  showInfo() {
    this.recaptchaHidden = false
  }

  performLogin() {
    this.loginService.getUserData(this.dataForm.value).subscribe((response) => {
      console.log(response)
    })

  }

}