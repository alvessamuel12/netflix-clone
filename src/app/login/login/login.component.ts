import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  recaptchaHidden = true
  logoInitWidth = '167px'
  dataForm = this.fb.group({
    login: ['', [Validators.required, this.createEmailOrPhoneValidator()]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]]
  })

  constructor(private fb: FormBuilder, private appService: AppService, private router: Router) { }

  // Return a custom validator function that is used to check if the value inserted by the user follows an email or phone number pattern.
  createEmailOrPhoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isEmail = !Validators.email(control)
      const isPhoneNumber = /^(?!(\d)\1{10})\d{11}$/.test(control.value) // Check for precisely 11 digits and not all of them equal
      if (isEmail || isPhoneNumber) {
        return null
      }
      return {isEmail, isPhoneNumber}
    }
  }

  // Make the text info about reCaptcha become visible and the link to show this info to become hidden
  showInfo() {
    this.recaptchaHidden = false
  }

  // Request the user data from the API if the form is valid. If the login is sucessfull, it saves the token and users data in the localStorage. After that, the application goes to the profiles page
  performLogin() {
    if (this.dataForm.status === 'VALID') {
      this.appService.requestLogIn(this.dataForm.value).subscribe(({token, users}) => {
        localStorage.setItem('token', token)
        localStorage.setItem('users', JSON.stringify(users))
        this.dataForm.reset()
        this.router.navigate(['profiles'])
      })
    }
  }

}
