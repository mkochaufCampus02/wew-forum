import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesComponent } from './entries/entries.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EntriesComponent,
    SingleEntryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    EntriesComponent,
    SingleEntryComponent
  ]
})
export class DashboardModule { }
