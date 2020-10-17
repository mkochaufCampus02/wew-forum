import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Entry} from '../../entities/entry';
import {ForumService} from '../../services/forum.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

    public Entries: Array<Entry> = [];

    constructor(private forumSerivce: ForumService) {
    }

    ngOnInit(): void { 

      this.forumSerivce.getEntries().subscribe((entries) => {
        this.Entries = entries;
      })
    }

}
