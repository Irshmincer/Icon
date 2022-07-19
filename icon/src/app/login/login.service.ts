import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = 'https://next.fugamusic.com/api/v2';
  cookie = this.cookieService.get('Test');

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getloginapi(name: any) {
    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   'access-control-expose-headers': 'Set-Cookie',
    // };

    // const requestOptions = {
    //   headers: new HttpHeaders(headerDict),
    // };z

    return this.http.post(this.baseUrl + '/login', name, {
      observe: 'response',
    });
  }

  getasset() {
    const headerDict = {
      samplecookie: `${this.cookie}`,
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get(
      'https://next.fugamusic.com/api/v1/assets?page=0&page_size=15',
      requestOptions
    );
  }
}
