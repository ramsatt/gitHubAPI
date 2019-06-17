import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  baseUserUrl = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }

  getUsersByURL(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUserUrl).pipe(map(data => {
      return data;
    }));
  }

  getUserDetailsByName(name): Observable<any[]> {
    return this.http.get<any[]>(this.baseUserUrl + '/' + name).pipe(map(data => {
      return data;
    }));
  }

  getRepos(url): Observable<any[]> {
    return this.http.get<any[]>(url).pipe(map(data => {
      return data;
    }));
  }
}
