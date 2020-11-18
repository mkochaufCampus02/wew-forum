import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entry } from 'src/app/entities/entry';
import { User } from 'src/app/entities/user';
import { AppstateService } from 'src/app/shared/services/appstate.service';
import { ForumService } from 'src/app/shared/services/forum.service';


@Component({
  selector: 'entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  @Input("id")
  public id: number;

  @Input("title")
  public title: string;

  @Input("text")
  public text: string;

  @Output("saved") EntrySaved = new EventEmitter();

  constructor(private forumService: ForumService, private appstateService: AppstateService) { }

  ngOnInit(): void {
  }

  public save()
  {
    const user: User = this.appstateService.GetUser();
    if(this.id !== null && this.id !== undefined)
    {
      const newEntry: Entry = {
        id:this.id,
        title: this.title,
        text: this.text,
        creator: user.userName,
        creatorId: user.id
      }
      this.forumService.upateEntry(newEntry).subscribe((test)=> {
        console.log(test);
        this.EntrySaved.next(newEntry);
      });
    }
    else
    {
      const newEntry: Entry = {
        id:null,
        title: this.title,
        text: this.text,
        creator: user.userName,
        creatorId: user.id
      }
  
      this.forumService.addEntry(newEntry).subscribe((test)=> {
        console.log(test);
        this.EntrySaved.next(newEntry);
      });
    }
    
    
  }

}
