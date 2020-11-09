import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {User} from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {

  public UserChanged = new EventEmitter();

  private readonly UserBehavior = new BehaviorSubject<User>(null);

  public IsUserLoggedIn(): boolean
  {
    const user: User = this.GetUser();
    return user !== null && user.id !== 0;
  }

  public GetUser(): User
  {
    return this.UserBehavior.getValue();
  }

  public SetUser(userId: number, name: string): void
  {
    const value: User = {
      id : userId,
      userName : name
    };
    this.UserBehavior.next(value);
    this.UserChanged.next(value);
  }

  constructor() { }
}
