import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Like } from '../../shared/entities/like';
import { User } from '../../shared/entities/user';
import { AppstateService } from '../../shared/services/appstate.service';
import { EntryService } from '../../shared/services/entry.service';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {

  @Input("entry")
  public entry: number;

  @Input("text")
  public text: string;

  @Input("creator")
  public creator: string;

  @Input("id")
  public id: number;

  @Input("likes")
  public likes: number;

  @Output("deleted") CommentDeleted = new EventEmitter();

  @Output("liked") CommentLike = new EventEmitter();

  @Output("openEdit") CommentEdit = new EventEmitter<number>();

  public IsSameUser: boolean;
  public IsUser: boolean;
  public IsLiked: boolean = false;
  private like: Like;

  constructor(private appStateService: AppstateService, private entryService: EntryService) { }

  ngOnInit(): void {
    this.likes = 0;
    const user: User = this.appStateService.GetUser();
    this.IsSameUser = user !== null && user.userName === this.creator;
    if(user == null) {
      this.IsUser = false; 
    }else {
      this.IsUser = true;

      console.log(user.id);
      console.log(this.id);
      this.entryService.getLike(user.id, this.id).forEach(obj => {
        obj.forEach(child => {
        this.like = child;
        this.IsLiked = true;
        })
      });
    }

    this.entryService.getLikesAll(this.id).forEach(obj => {
      obj.forEach(child => {
        this.likes = this.likes + 1;
        console.log(this.likes);
      })
      console.log(this.likes);
    });
  
    console.log('Anzahl Likes:');
    console.log(this.likes);
  }

  public deleteComment()
  {
    this.entryService.deleteComment(this.id).subscribe((test)=> {
      console.log(test);
      this.CommentDeleted.next();
    });
  }

  public editComment()
  {
    this.CommentEdit.next(this.id);
  }

  public likeComment()
  {
    const user: User = this.appStateService.GetUser();
    const newLike: Like = {
      comment: this.id,
      id:null,
      creator: user.userName,
      creatorId: user.id
    }
    this.entryService.likeComment(newLike).subscribe((test)=> {
      this.CommentLike.next();
    });
    console.log('LIKE');
    console.log(this.id);
  }

  public unlikeComment()
  {
    this.entryService.unlikeComment(this.like.id).subscribe((test)=> {
      console.log(test);
      this.CommentLike.next();
    });
    console.log('UNLIKE');
    console.log(this.id);
  }

}
