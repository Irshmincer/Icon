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
  registration = this.fb.group({
    email: ['Scotty san', Validators.required],
    password: ['ILoveAudiotube1', Validators.required],
  });
  constructor(
    private login: LoginService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  getlogin() {
    const form = {
      name: 'Scotty san',
      password: 'ILoveAudiotube1',
    };
    this.login.getloginapi(form).subscribe((x) => {
      this.route.navigate(['/assetList']);
    });
  }
}
