import { Component, OnInit } from '@angular/core';
import {AppstateService} from '../services/appstate.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../entities/user';
import {HttpParams} from '@angular/common/http';
import {UserResponse} from '../entities/userResponse';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  passwordNew: string;
  passwordNew2: string;

  constructor(private appstateService: AppstateService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (!this.appstateService.IsUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  changePassword(): void {
    // Check if both password values match
    if (this.passwordNew !== this.passwordNew2) {
      this.showMessageDiv('passwordErrorDiv', 'The two password values must match');
      return;
    }

    const curUser = this.appstateService.GetUser();

    const params = new HttpParams()
      .set('username', curUser.userName)
      .set('password', this.passwordNew);

    this.userService.updateUser(curUser.id, params)
      .subscribe(
        (user: UserResponse) => {
          this.showMessageDiv('passwordSuccessDiv');
          console.log(user);
        },
        (errResp) => {
          console.error('Error creating user', errResp);
        });
  }

  hideMessageDiv(elementId: string, doClearDiv: boolean = false): void {
    if (doClearDiv){
      document.getElementById(elementId).getElementsByTagName('p')[0].innerHTML = '';
    }
    document.getElementById(elementId).classList.add('hidden');
  }

  showMessageDiv(elementId: string, message: string = null): void {
    if (message) {
      document.getElementById(elementId).getElementsByTagName('p')[0].innerHTML = message;
    }
    document.getElementById(elementId).classList.remove('hidden');
  }
}
