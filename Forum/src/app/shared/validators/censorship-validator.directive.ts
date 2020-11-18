import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { ForumService } from '../services/forum.service';

@Directive({
  selector: '[censorship]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: CensorshipValidatorDirective,
    multi: true
  }]
})
export class CensorshipValidatorDirective implements AsyncValidator {

  constructor(private forumService: ForumService) { }
  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    console.log("I'm in");
    this.forumService.getBlacklistedItems().subscribe((response) =>
    {
      let text:string = control.value;
      response.forEach(element => {
        if(text.indexOf(element.value) !== -1)
        {
          return {
            blacklist:{
              valid: false
            }
          };
        }
      });
    })
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    
  }

}
