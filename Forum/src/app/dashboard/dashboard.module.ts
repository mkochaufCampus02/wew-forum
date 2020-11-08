import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesComponent } from './entries/entries.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { RouterModule } from '@angular/router';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EntriesComponent,
    SingleEntryComponent,
    NewEntryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    EntriesComponent,
    SingleEntryComponent,
    NewEntryComponent,
    FormsModule
  ]
})
export class DashboardModule { }
