import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../entities/user';
import {AppstateService} from '../services/appstate.service'

@Component({
    selector: 'app-navbar-cmp',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {
    
    public isUserLoggedIn: boolean = false;
    public UserName: string ="";

    private userLoggedInSubscription: Subscription;

    constructor(public appstateService:AppstateService)
    {

    }
    ngOnDestroy(): void {
        this.userLoggedInSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.userLoggedInSubscription = this.appstateService.UserChanged.subscribe((value:User) => {
            this.isUserLoggedIn = value !== null && value.id !== 0;
            this.UserName = value.userName
        });
        
        
    }

    private sidebarVisible = false;

    sidebarToggle(){
        const body = document.getElementsByTagName('body')[0];

        if (this.sidebarVisible === false) {
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
