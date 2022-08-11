import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  url = 'http://localhost:8000';

  baseUrl = 'https://next.fugamusic.com/api/v2';

  iconURL = 'https://iconbackends.fidisys.com';

  registration = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private service: LoginService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  login() {
    const form = {
      name: `${this.registration.value['email']}`,
      password: `${this.registration.value['password']}`,
    };
    this.service.getLogin(form).subscribe((x: any) => {
      console.log('Headers List');

      console.log(x.body['token']);
      console.log('content-type =' + x.headers.get('Content-type'));
      console.log('Setcookie value = ' + x.headers.get('Set-Cookie'));

      localStorage.setItem('localstorage', `${x.body['token']}`);
      this.route.navigate(['/dashboard'], { state: { data: x.body['token'] } });
    });
  }
}
