import {Entry} from '../../shared/entities/entry';
import {ForumService} from '../../shared/services/forum.service'
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AppstateService } from 'src/app/shared/services/appstate.service';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit, AfterViewInit, OnDestroy {

    private ReadOnlyEntities: Array<Entry> = [];
    public Entries: Array<Entry> = [];

    public IsUserLoggedIn: boolean = false;

    public IsAddEntryPopupShown = false;
    public IsEditEntryPopupShown = false;
    public EntryToEdit:Entry= null;

    public searchTerm: string;

    @ViewChild("searchTermInput") searchTermInput: ElementRef;

    private searchTermSubscription: Subscription;

    constructor(private forumSerivce: ForumService, private appstateService: AppstateService) {
    }
    ngOnDestroy(): void {
      this.searchTermSubscription.unsubscribe();
    }
    ngAfterViewInit(): void {
      this.searchTermSubscription = fromEvent(this.searchTermInput.nativeElement,'keyup').pipe(
        debounceTime(600)
      ).subscribe( (e) => {
        this.searchForEntries();
      });
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

    private searchForEntries()
    {
      this.Entries = this.ReadOnlyEntities.filter(x=> x.title.includes(this.searchTerm));
    }

    private ReadEntries()
    {
      this.forumSerivce.getEntries().subscribe((entries) => {
        this.Entries = entries;
        this.ReadOnlyEntities = entries;
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
