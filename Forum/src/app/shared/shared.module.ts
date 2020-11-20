import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPasswordDirective } from './validation/new-password.directive';
import {CensorshipValidatorDirective} from './validation/censorship-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NewPasswordDirective,
    CensorshipValidatorDirective
  ],
  exports: [
    NewPasswordDirective,
    CensorshipValidatorDirective
  ]
})
export class SharedModule { }
