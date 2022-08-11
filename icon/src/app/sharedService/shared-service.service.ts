import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AssetListPage, assetResult } from './sharedModel';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  subs$ = new Subject();
  headerDict = {
    'Content-Type': 'application/json',
    'x-csrf-token': `${localStorage.getItem('localstorage')}`,
  };

  baseUrl = ' https://next.fugamusic.com/api/v2';

  constructor(private http: HttpClient) {}

  // uploadAsset(name : any): Observable<assetResult> {
  //   return this.http.post<assetResult>(`${this.baseUrl}/users`, name);
  // }

  ListAsset(): Observable<AssetListPage> {
    return this.http.get<AssetListPage>(
      `${this.baseUrl}/assets?page=0&page_size=20`,
      { headers: this.headerDict }
    );
  }
}
