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

  getLogin(name: any) {
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

  getAsset() {
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

  getasset(name: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Cookie:
          'connect.sid=s%3AWZ3AGpPxQUspiLw7rgo3uQjSy6uC8VLo.T3TkJ3Y5Q%2FEmjGsX1hr8Ade7gBARJpaag1yrhKhKu84',
      }),
    };

    return this.http.post(
      'https://next.fugamusic.com/api/v1/assets',
      name,
      httpOptions
    );
  }
}
