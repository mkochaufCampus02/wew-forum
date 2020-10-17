import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesComponent } from './entries/entries.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';

@NgModule({
  declarations: [
    EntriesComponent,
    SingleEntryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EntriesComponent,
    SingleEntryComponent
  ]
})
export class DashboardModule { }
