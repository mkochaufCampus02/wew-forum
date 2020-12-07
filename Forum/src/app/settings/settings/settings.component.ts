import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';
import { AppstateService } from '../../shared/services/appstate.service';
import {User} from '../../shared/entities/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  curUser: User;

  constructor(private appstateService: AppstateService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (!this.appstateService.IsUserLoggedIn()) {
      this.router.navigate(['/login']);
    }

    this.curUser = this.appstateService.GetUser();
  }

  logOut(): void {
    this.appstateService.SetUser(0, null);
    this.router.navigate(['/login']);
  }

}
