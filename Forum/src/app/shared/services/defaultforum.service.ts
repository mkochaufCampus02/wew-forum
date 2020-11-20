import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlacklistItem } from '../../shared/entities/blacklistItem';
import { Entry } from '../../shared/entities/entry';
import { ForumService } from './forum.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultForumService implements ForumService {
  private BaseUrl:string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }
  getBlacklistedItems(): Observable<BlacklistItem[]> {
    let url = this.BaseUrl+'blacklist';

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<BlacklistItem[]>(url, {headers});
  }
  upateEntry(entry: Entry): Observable<object> {
    let url = this.BaseUrl+'entries/'+entry.id;

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.put(url, entry,{headers});
  }
  addEntry(entry: Entry): Observable<object> {
    let url = this.BaseUrl+'entries';

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.post(url, entry,{headers});
  }

  getEntries(): Observable<Entry[]> {
    let url = this.BaseUrl+'entries';

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Entry[]>(url, {headers});
  }

  deleteEntry(id:number): Observable<object>
  {
    let url = this.BaseUrl+"entries/"+id;
    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.delete(url, {headers});
  }
 
}
