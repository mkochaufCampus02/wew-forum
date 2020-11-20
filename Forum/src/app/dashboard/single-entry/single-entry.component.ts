import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../shared/entities/user';
import { AppstateService } from 'src/app/shared/services/appstate.service';
import { ForumService } from 'src/app/shared/services/forum.service';

@Component({
  selector: 'single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  @Input("title")
  public title: string;

  @Input("text")
  public text: string;

  @Input("creator")
  public creator: string;

  @Input("id")
  public id: number;

  @Output("deleted") EntryDeleted = new EventEmitter();

  @Output("openEdit") EntryEdit = new EventEmitter<number>();

  public IsSameUser: boolean;

  constructor(private appStateService: AppstateService, private forumService: ForumService) { }

  ngOnInit(): void {
    const user: User = this.appStateService.GetUser();
    this.IsSameUser = user !== null && user.userName === this.creator;
  }

  public deleteEntry()
  {
    this.forumService.deleteEntry(this.id).subscribe((test)=> {
      console.log(test);
      this.EntryDeleted.next();
    });


  }

  public editEntry()
  {
    this.EntryEdit.next(this.id);
  }

  /*@HostListener('window:resize')
  windowSizeChanged()
  {
    var card = document.getElementById("single-card");
    this.footerWidth = card.offsetWidth+"px;";
    console.log(this.footerWidth);
  }*/

}

