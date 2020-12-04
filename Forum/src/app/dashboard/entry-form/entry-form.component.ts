import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CensorshipValidatorDirective } from 'src/app/shared/validation/censorship-validator.directive';
import { Entry } from '../../shared/entities/entry';
import { User } from '../../shared/entities/user';
import { AppstateService } from '../../shared/services/appstate.service';
import { ForumService } from '../../shared/services/forum.service';


@Component({
  selector: 'entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  @Input("id")
  public id: number;

  @Input("title")
  public title;

  @Input("text")
  public text;

  @Output("saved") EntrySaved = new EventEmitter();

  constructor(private forumService: ForumService, private appstateService: AppstateService) { 
  }

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
