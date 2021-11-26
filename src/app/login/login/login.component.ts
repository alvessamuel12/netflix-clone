import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  recaptchaHidden = true
  dataForm = this.fb.group({
    login: ['', [Validators.required, this.createEmailOrPhoneValidator()]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]]
  })

  constructor(private fb: FormBuilder, private appService: AppService) { }

  ngOnInit(): void {}

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

  // Request the user data from the API if the form is valid
  performLogin() {
    if (this.dataForm.status === 'VALID') {
      this.appService.postUserData(this.dataForm.value).subscribe((response) => {
        console.log(response)
      })
      this.dataForm.reset()
    }
  }

}