import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { FormsModule } from '@angular/forms';
import { SingleCommentComponent } from './single-comment/single-comment.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EntryDetailComponent, 
    CommentFormComponent,
    SingleCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    EntryDetailComponent,
    CommentFormComponent,
    FormsModule,
    SingleCommentComponent
  ]
})
export class EntryDetailModule { }