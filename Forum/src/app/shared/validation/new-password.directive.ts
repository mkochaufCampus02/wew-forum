import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors} from '@angular/forms';

@Directive({
  selector: '[appNewPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NewPasswordDirective,
    multi: true
  }]
})
export class NewPasswordDirective {

  constructor() { }

  validate(c: AbstractControl): ValidationErrors | null {
    const validCities: string[] = ['Hamburg', 'Graz'];
    console.log(c.value);
    if (c.value && validCities.indexOf(c.value) === -1) {
      return {
        city: {
          actualValue: c.value,
          validCities
        }
      };
    }
    return null;
  }
}
