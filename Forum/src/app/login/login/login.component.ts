import { Component, OnInit } from '@angular/core';
import { AppstateService } from 'src/app/services/appstate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appstateService: AppstateService) { }

  ngOnInit(): void {
    this.appstateService.SetUser(1,"michael");
  }

}
