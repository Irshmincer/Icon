import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { assetResult } from './sharedModel';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  subs$ = new Subject();

  constructor(private http: HttpClient) {}

  // uploadAsset(name : any): Observable<assetResult> {
  //   return this.http.post<assetResult>(`${this.baseUrl}/users`, name);
  // }
}
