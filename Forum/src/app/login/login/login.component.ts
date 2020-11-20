import { Component, OnInit } from '@angular/core';
import { AppstateService } from 'src/app/shared/services/appstate.service';
import {HttpParams} from '@angular/common/http';
import {UserResponse} from '../../shared/entities/userResponse';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private appstateService: AppstateService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.appstateService.IsUserLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  signInUser(): void {
    const params = new HttpParams()
      .set('username', this.username)
      .set('password', this.password);

    this.userService.getUser(params)
      .subscribe(
        (users: UserResponse[]) => {
          // If user is not found show error message
          if (users.length === 0) {
            console.error('No user found');
            this.showErrorDiv('User / Password combination not found');
            return;
          }
          this.clearErrorDiv();
          // Set user information in appstateService
          this.appstateService.SetUser(users[0].id, users[0].username);
          this.router.navigate(['/']);
        },
        (errResp) => {
          console.error('Error loading user', errResp);
        });
  }

  registerUser(): void {
    const getParams = new HttpParams()
      .set('username', this.username);

    this.userService.getUser(getParams)
      .subscribe(
        (users: UserResponse[]) => {
          // If user with same username is found, show error message
          if (users.length > 0) {
            console.error('Username already in use');
            this.showErrorDiv('Username already in use');
            return;
          }

          this.userService.addUser(this.username, this.password)
            .subscribe(
              (user: UserResponse) => {
                this.clearErrorDiv();
                // Set user information in appstateService
                this.appstateService.SetUser(user.id, user.username);

                this.router.navigate(['/']);
              },
              (errResp) => {
                console.error('Error creating user', errResp);
              });
        },
        (errResp) => {
          console.error('Error loading user', errResp);
        });
  }

  clearErrorDiv(): void {
    document.getElementById('errorDiv').getElementsByTagName('p')[0].innerHTML = '';
    document.getElementById('errorDiv').classList.add('hidden');
  }

  showErrorDiv(message: string): void {
    document.getElementById('errorDiv').getElementsByTagName('p')[0].innerHTML = message;
    document.getElementById('errorDiv').classList.remove('hidden');
  }
}
