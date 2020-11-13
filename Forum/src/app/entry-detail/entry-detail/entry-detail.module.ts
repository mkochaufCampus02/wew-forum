import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryDetailComponent } from './entry-detail.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { FormsModule } from '@angular/forms';
import { SingleCommentComponent } from '../single-comment/single-comment.component';

@NgModule({
  declarations: [
    EntryDetailComponent, 
    CommentFormComponent,
    SingleCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    EntryDetailComponent,
    CommentFormComponent,
    FormsModule,
    SingleCommentComponent
  ]
})
export class EntryDetailModule { }