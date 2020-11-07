import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Entry} from '../../entities/entry';
import {ForumService} from '../../services/forum.service'
import { Component, OnInit } from '@angular/core';
import { AppstateService } from 'src/app/services/appstate.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

    public Entries: Array<Entry> = [];

    constructor(private forumSerivce: ForumService, private appstateService: AppstateService) {
    }

    ngOnInit(): void { 

      this.ReadEntries();
    }

    public addEntry()
    {
      this.appstateService.SetUser(1,"michael");
      const currentUser = this.appstateService.GetUser();
      const newEntry: Entry = {
        id: null,
        title: "Michaels New one",
        text: "A new entry",
        creator: currentUser.userName,
        creatorId: currentUser.id
      };
      this.forumSerivce.addEntry(newEntry).subscribe((test)=> {
        console.log(test);
        this.ReadEntries();
      });
      
    }

    private ReadEntries()
    {
      this.forumSerivce.getEntries().subscribe((entries) => {
        this.Entries = entries;
      })
    }

}
