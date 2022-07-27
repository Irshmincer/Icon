import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  cookieValue!: string;
  registration = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private service: LoginService,
    private route: Router,
    private fb: FormBuilder,
    private cookieService: CookieService
  ) {
    this.cookieService.set('Test', 'sample values are stored in cookies');
    this.cookieValue = this.cookieService.get('Test');
  }

  ngOnInit(): void {}

  login() {
    const form = {
      name: 'sathish',
      password: 'ILoveAudiotube1',
      secure: true,
      authType: 'session_and_jwt',
    };
    this.service.getLogin(form).subscribe((x) => {
      console.log('Headers List');

      console.log('content-type =' + x.headers.get('Content-type'));
      console.log('Setcookie value = ' + x.headers.get('Set-Cookie'));

      console.log(this.cookieValue);
      this.route.navigate(['/dashboard']);
    });
  }
}
