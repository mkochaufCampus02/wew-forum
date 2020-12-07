import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import { UserService } from '../services/user.service';
import {HttpParams} from '@angular/common/http';
import {User} from '../entities/user';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Directive({
  selector: 'input[appNewPassword]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: NewPasswordDirective,
    multi: true
  }]
})
export class NewPasswordDirective {

  @Input() curUser: User;

  constructor(private userService: UserService) { }

  validate(c: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> | null {
    const params = new HttpParams()
      .set('id', String(this.curUser.id))
      .set('password', c.value);

    return this.userService.getUser(params).pipe(map((response) =>
    {
      if (response.length !== 1) {
        return null;
      }

      return {appNewPassword: true};
    }));
  }
}
