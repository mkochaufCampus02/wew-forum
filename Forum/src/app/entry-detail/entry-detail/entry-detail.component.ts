import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppstateService } from 'src/app/services/appstate.service';
import { EntryService } from '../../services/entry.service'
import { Comment } from '../../entities/comment';
import { Entry } from 'src/app/entities/entry';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {

  @Input("title")
  public title: string;

  @Input("text")
  public text: string;

  @Input("creator")
  public creator: string;

  private entry_id: number;
  public entry: Entry;
  public IsUserLoggedIn: boolean = false;
  public IsAddCommentPopupShown: boolean = false;
  public IsEditCommentPopupShown: boolean = false;
  public CommentToEdit:Comment= null;

  public IsEditEntryPopupShown = false;

  public Comments: Array<Comment> = [];

  constructor(private route: ActivatedRoute, private appstateService: AppstateService, private entryService: EntryService, private forumSerivce: ForumService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => {
        this.entry_id = Number(params.get('id'));
        console.log(this.entry_id);
      }
    );

    this.forumSerivce.getEntries().forEach(obj => {
      obj.forEach(child =>{
        this.entry = child;
        this.title = this.entry.title;
        this.text = this.entry.text;
        this.creator = this.entry.creator;
      })      
    });

    this.IsUserLoggedIn = this.appstateService.IsUserLoggedIn();

    this.ReadComments();
    
  }

  public showAddComment()
  {
    if(!this.IsAddCommentPopupShown)
    {
      this.IsAddCommentPopupShown = true;
    }
  }

  private ReadComments()
  {
    this.entryService.getComment(this.entry_id).subscribe((comments) => {
      this.Comments = comments;
    })
  }

  public closePopup()
  {
    if(this.IsAddCommentPopupShown)
    {
      this.IsAddCommentPopupShown = false;
    }

    if(this.IsEditCommentPopupShown)
    {
      this.IsEditCommentPopupShown = false;
    }
  }

  public commentSaved()
  {
    this.closePopup();
    this.ReadComments();
  }

  public commentDeleted()
    {
      this.ReadComments();
    }

  public commentLiked()
  {
    this.ReadComments();
  }

  public editComment(event){

    this.CommentToEdit = this.Comments.find(x=> x.id == event);
    this.IsEditCommentPopupShown = true;
  }

}
