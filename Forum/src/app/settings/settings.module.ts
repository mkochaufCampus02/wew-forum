import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SettingsComponent} from './settings/settings.component';
import { PasswordComponent } from './password/password.component';
import {SharedModule} from '../shared/shared.module';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
    SettingsComponent,
    PasswordComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
