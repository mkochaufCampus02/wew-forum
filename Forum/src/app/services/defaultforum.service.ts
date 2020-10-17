import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from '../entities/entry';
import { ForumService } from './forum.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultForumService implements ForumService {

  constructor(private http: HttpClient) { }

  getEntries(): Observable<Entry[]> {
    let url = 'http://localhost:3000/entries';

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Entry[]>(url, {headers});
  }
 
}
