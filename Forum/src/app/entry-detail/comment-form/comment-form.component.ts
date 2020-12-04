import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AppstateService } from '../../shared/services/appstate.service';
import { User } from '../../shared/entities/user';
import { EntryService } from '../../shared/services/entry.service';
import { Comment } from '../../shared/entities/comment';
import { CensorshipCommentValidatorDirective } from 'src/app/shared/validation/censorship_comment-validator.directive';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input("entry")
  public entry: number;

  @Input("id")
  public id: number;

  @Input("text")
  public text: string;

  @Output("saved") CommentSaved = new EventEmitter();

  constructor(private appstateService: AppstateService, private entryService: EntryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.entry = Number(params.get('id'));
        console.log(this.entry);
      }
    );
  }

  public save()
  {
    const user: User = this.appstateService.GetUser();
    if(this.id !== null && this.id !== undefined)
    {
      const newComment: Comment = {
        entry: this.entry,
        id: this.id,
        text: this.text,
        creator: user.userName,
        creatorId: user.id
      }
      this.entryService.upateComment(newComment).subscribe((test)=> {
        console.log(test);
        this.CommentSaved.next(newComment);
      });
    }
    else
    {
      const newComment: Comment = {
        entry: this.entry,
        id:null,
        text: this.text,
        creator: user.userName,
        creatorId: user.id
      }
  
      this.entryService.addComment(newComment).subscribe((test)=> {
        console.log(test);
        this.CommentSaved.next(newComment);
      });
    }    
  }
}
