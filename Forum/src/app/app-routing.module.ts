import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo:'home',
    pathMatch:'full'  
  },
  {
    path:'home',
    component: AppComponent
  },
  {
    path:'**',
    redirectTo:'home'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }