import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryDetailComponent } from './entry-detail/entry-detail.component'



@NgModule({
  declarations: [EntryDetailComponent],
  imports: [
    CommonModule
  ],
  exports:[
    EntryDetailComponent
  ]
})
export class EntryDetailModule { }
