import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesComponent } from './entries/entries.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { RouterModule } from '@angular/router';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EntriesComponent,
    SingleEntryComponent,
    EntryFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    EntriesComponent,
    SingleEntryComponent,
    EntryFormComponent,
    FormsModule
  ]
})
export class DashboardModule { }
