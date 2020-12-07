import {Component, Output, EventEmitter, Input} from '@angular/core';
import {UserResponse} from '../../shared/entities/userResponse';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/entities/user';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  deletionState = 0;
  @Input() curUser: User;
  @Output() logOut = new EventEmitter<null>();

  constructor(private userService: UserService) { }

  deleteAccount(): void {
    console.log('delete start');
    this.userService.deleteUser(this.curUser.id)
      .subscribe(
        (user: UserResponse) => {
          console.log(user);
          this.logOut.next();
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
}
