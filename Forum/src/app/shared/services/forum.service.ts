import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from '../../entities/entry';
import { BlacklistItem } from '../../entities/blacklistItem';
import {DefaultForumService} from './defaultforum.service';

@Injectable({
  providedIn: 'root',
  useClass: DefaultForumService
})
export abstract class ForumService {

  constructor() { }

  abstract getEntries(): Observable<Entry[]>;

  abstract addEntry(entry: Entry): Observable<object>;
  
  abstract upateEntry(entry: Entry): Observable<object>;

  abstract deleteEntry(id:number): Observable<object>;

  abstract getBlacklistedItems(): Observable<BlacklistItem[]>;  

}
