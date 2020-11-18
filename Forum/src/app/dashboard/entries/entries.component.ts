import {Entry} from '../../entities/entry';
import {ForumService} from '../../shared/services/forum.service'
import { Component, OnInit } from '@angular/core';
import { AppstateService } from 'src/app/shared/services/appstate.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

    public Entries: Array<Entry> = [];

    public IsUserLoggedIn: boolean = false;

    public IsAddEntryPopupShown = false;
    public IsEditEntryPopupShown = false;
    public EntryToEdit:Entry= null;

    constructor(private forumSerivce: ForumService, private appstateService: AppstateService) {
    }

    ngOnInit(): void { 
      this.IsUserLoggedIn = this.appstateService.IsUserLoggedIn();
      this.ReadEntries();
    }

    public showAddEntry()
    {
      if(!this.IsAddEntryPopupShown)
      {
        this.IsAddEntryPopupShown = true;
      }
    }

    private ReadEntries()
    {
      this.forumSerivce.getEntries().subscribe((entries) => {
        this.Entries = entries;
      })
    }

    public closePopup()
    {
      if(this.IsAddEntryPopupShown)
      {
        this.IsAddEntryPopupShown = false;
      }

      if(this.IsEditEntryPopupShown)
      {
        this.IsEditEntryPopupShown = false;
      }
    }

    public entrySaved()
    {
      this.closePopup();
      this.ReadEntries();
    }

    public entryDeleted()
    {
      this.ReadEntries();
    }

    public editEntry(event){

      this.EntryToEdit = this.Entries.find(x=> x.id == event);
      this.IsEditEntryPopupShown = true;
    }

}
