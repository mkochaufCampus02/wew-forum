import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from '../entities/entry';
import {DefaultForumService} from './defaultforum.service';

@Injectable({
  providedIn: 'root',
  useClass: DefaultForumService
})
export abstract class ForumService {

  constructor() { }

  abstract getEntries(): Observable<Entry[]>;

  abstract addEntry(entry: Entry): Observable<object>;

}
