import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../entities/user';
import {AppstateService} from '../services/appstate.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar-cmp',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {

    constructor(public appstateService: AppstateService, private router: Router)
    {

    }

    public isUserLoggedIn = false;
    public UserName = '';

    private userLoggedInSubscription: Subscription;
    private sidebarVisible = false;

    ngOnDestroy(): void {
        this.userLoggedInSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.userLoggedInSubscription = this.appstateService.UserChanged.subscribe((value: User) => {
            this.isUserLoggedIn = value !== null && value.id !== 0;
            this.UserName = value.userName;
        });
    }

    sidebarToggle(): void {
        const body = document.getElementsByTagName('body')[0];

        if (this.sidebarVisible === false) {
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    logOutUser(): void {
      this.appstateService.LogOutUser();
      this.router.navigate(['/login']);
    }
}
