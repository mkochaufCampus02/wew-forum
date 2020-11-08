import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Entry} from '../../entities/entry';
import {ForumService} from '../../services/forum.service'
import { Component, OnInit } from '@angular/core';
import { AppstateService } from 'src/app/services/appstate.service';
import { User } from 'src/app/entities/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

    public Entries: Array<Entry> = [];

    public IsUserLoggedIn: boolean = false;

    public IsAddEntryPopupShown = false;

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

}
