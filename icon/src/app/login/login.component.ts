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
    email: ['Scotty san', Validators.required],
    password: ['ILoveAudiotube1', Validators.required],
  });
  constructor(
    private login: LoginService,
    private route: Router,
    private fb: FormBuilder,
    private cookieService: CookieService
  ) {
    this.cookieService.set('Test', 'sample values are stored in cookies');
    this.cookieValue = this.cookieService.get('Test');
  }

  ngOnInit(): void {}

  getlogin() {
    const form = {
      name: 'Scotty san',
      password: 'ILoveAudiotube1',
    };
    this.login.getloginapi(form).subscribe((x) => {
      console.log(x.headers);
      console.log(this.cookieValue);
      this.route.navigate(['/assetList']);
    });
  }
}
