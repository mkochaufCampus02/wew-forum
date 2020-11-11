import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {UserResponse} from '../entities/userResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/users';
  }


  getUser(params: HttpParams): Observable<UserResponse[]> {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<UserResponse[]>(this.url, {headers, params});
  }

  addUser(username: string, password: string): Observable<UserResponse> {
    const newUser = {
      username,
      password
    };

    return this.http.post<UserResponse>(this.url, newUser);
  }
}
