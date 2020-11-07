import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EntriesComponent } from './dashboard/entries/entries.component';
import { EntryDetailComponent } from './entry-detail/entry-detail/entry-detail.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { 
    path: '', 
    component: EntriesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "entry/:id",
    component: EntryDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }