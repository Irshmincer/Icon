import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = 'https://next.fugamusic.com/api/v2';

  constructor(private http: HttpClient) {}

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
}
