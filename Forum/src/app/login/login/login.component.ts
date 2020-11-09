import { Component, OnInit } from '@angular/core';
import { AppstateService } from 'src/app/services/appstate.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {User} from '../../entities/user';
import {UserResponse} from '../../entities/userResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private appstateService: AppstateService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  signInUser(): void {
    const url = 'http://localhost:3000/users';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('username', this.username)
      .set('password', this.password);

    this.http
      .get<UserResponse[]>(url, {headers, params})
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
        },
        (errResp) => {
          console.error('Error loading user', errResp);
        });
  }

  registerUser(): void {
    const url = 'http://localhost:3000/users';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const getParams = new HttpParams()
      .set('username', this.username);

    const newUser = {
      username: this.username,
      password: this.password
    };


    this.http
      .get<User[]>(url, {headers, params: getParams})
      .subscribe(
        (users: User[]) => {
          console.log('user', users);
          // If user with same username is found, show error message
          if (users.length > 0) {
            console.error('Username already in use');
            this.showErrorDiv('Username already in use');
            return;
          }

          this.http
            .post<UserResponse>(url, newUser)
            .subscribe(
              (user: UserResponse) => {
                console.log('user', user);
                // If user with same username is found, show error message
                this.clearErrorDiv();
                // Set user information in appstateService
                this.appstateService.SetUser(user.id, user.username);
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
