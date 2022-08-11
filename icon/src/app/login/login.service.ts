import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = 'https://next.fugamusic.com/api/v2';
  iconURL = 'https://iconbackends.fidisys.com';
  backend = 'http://localhost:8000/signin';

  newbaseurl = 'https://ddp.in.net';
  localstroage = localStorage.getItem('cebrus-token');

  constructor(private http: HttpClient) {}

  getLogin(name: any) {
    const headerDict = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseUrl + '/login', name, {
      observe: 'response',
      headers: headerDict,
      // withCredentials: true,
    });
  }
}
