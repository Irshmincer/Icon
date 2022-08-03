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
  
  }

  ngOnInit(): void {

    
  }

  login() {
    const form = {
      username: 'user2',
      password: 'password2',
    };
    this.service.getLogin(form).subscribe((x) => {
      console.log('Headers List');
      console.log(x);
      console.log(x.headers.keys());
      console.log('content-type =' + x.headers.get('Content-type'));
      console.log('Setcookie value = ' + x.headers.get('Set-Cookie'));
      this.cookieValue = this.cookieService.get('session_token');

      console.log(this.cookieValue);
      this.route.navigate(['/dashboard']);
      this.get();
      this.logout();
      
    });
  }

  logout(){
    this.service.getlogout().subscribe((x) => {
      console.log(x);
    });
  }


  get(){
    this.service.getvalue().subscribe(x =>{
      console.log(x)
    })
  }
}
