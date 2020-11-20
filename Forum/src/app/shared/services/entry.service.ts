import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Comment } from '../entities/comment';
import { Like } from '../entities/like';
import { Observable } from 'rxjs';
import { CommentFormComponent } from '../../entry-detail/comment-form/comment-form.component';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private BaseUrl:string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  upateComment(comment: Comment): Observable<object> {
    let url = this.BaseUrl+'comments/'+comment.id;

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.put(url, comment,{headers});
  }
  addComment(comment: Comment): Observable<object> {
    let url = this.BaseUrl+'comments';

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.post(url, comment,{headers});
  }

  getComment(entry_id: number): Observable<Comment[]> {
    let url = this.BaseUrl+'comments?entry='+entry_id;

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Comment[]>(url, {headers});
  }

  getLike(user_id: number, commend_id: number): Observable<Like[]> {
    let url = this.BaseUrl+'likes?comment='+commend_id+'&creatorId='+user_id;
    console.log(url);
    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Like[]>(url, {headers});
  }

  getLikesAll(commend_id: number): Observable<Like[]> {
    let url = this.BaseUrl+'likes?comment='+commend_id;
    console.log(url);
    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Like[]>(url, {headers});
  }

  likeComment(like: Like){
    let url = this.BaseUrl+'likes';
    let headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.post(url, like,{headers});
  }

  unlikeComment(id: number){
    let url = this.BaseUrl+"likes/"+id;
    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.delete(url, {headers});
  }

  deleteComment(id:number): Observable<object>
  {
    let url = this.BaseUrl+"comments/"+id;
    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.delete(url, {headers});
  }
}
