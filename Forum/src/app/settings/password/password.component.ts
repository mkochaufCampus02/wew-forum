import {Component, Input} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {UserResponse} from '../../shared/entities/userResponse';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/entities/user';

@Component({
  selector: 'app-password-settings',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  passwordNew: string;
  passwordNew2: string;
  @Input() curUser: User;

  constructor(private userService: UserService) { }

  changePassword(): void {
    // Check if both password values match
    if (this.passwordNew !== this.passwordNew2) {
      this.showMessageDiv('passwordErrorDiv', 'The two password values must match');
      return;
    }

    const params = new HttpParams()
      .set('username', this.curUser.userName)
      .set('password', this.passwordNew);

    this.userService.updateUser(this.curUser.id, params)
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
