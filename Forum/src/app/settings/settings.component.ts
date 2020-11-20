import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {UserResponse} from '../shared/entities/userResponse';
import { AppstateService } from '../shared/services/appstate.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  passwordNew: string;
  passwordNew2: string;

  deletionState = 0;

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

  deleteAccount(): void {
    console.log('delete start');
    this.userService.deleteUser(this.appstateService.GetUser().id)
      .subscribe(
        (user: UserResponse) => {
          console.log(user);
          this.appstateService.SetUser(0, null);
          this.router.navigate(['/login']);
        },
        (errResp) => {
          console.error('Error deleting user', errResp);
        });
  }

  increaseDeletionState(): void  {
    this.deletionState++;
  }
  resetDeletionState(): void {
    this.deletionState = 0;
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
