import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {LoginModule} from './login/login.module';
import {EntryDetailModule} from './entry-detail/entry-detail.module';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { CensorshipValidatorDirective } from './shared/validators/censorship-validator.directive';


@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      DashboardModule,
      LoginModule,
      EntryDetailModule,
      AppRoutingModule
   ],
   declarations: [
      AppComponent,
      NavbarComponent,
      SettingsComponent,
      CensorshipValidatorDirective
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
