import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Entry } from 'src/app/entities/entry';
import { User } from 'src/app/entities/user';
import { AppstateService } from 'src/app/services/appstate.service';
import { ForumService } from 'src/app/services/forum.service';


@Component({
  selector: 'new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
  public title: string;
  public text: string;

  @Output("saved") EntrySaved = new EventEmitter();

  constructor(private forumService: ForumService, private appstateService: AppstateService) { }

  ngOnInit(): void {
  }

  public save()
  {
    const user: User = this.appstateService.GetUser();
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
