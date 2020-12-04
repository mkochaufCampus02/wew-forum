import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPasswordDirective } from './validation/new-password.directive';
import {CensorshipValidatorDirective} from './validation/censorship-validator.directive';
import {CensorshipCommentValidatorDirective} from './validation/censorship_comment-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NewPasswordDirective,
    CensorshipValidatorDirective,
    CensorshipCommentValidatorDirective
  ],
  exports: [
    NewPasswordDirective,
    CensorshipValidatorDirective,
    CensorshipCommentValidatorDirective
  ]
})
export class SharedModule { }
