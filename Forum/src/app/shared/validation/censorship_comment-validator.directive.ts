import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ForumService } from '../services/forum.service';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[censorship_comment]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: CensorshipCommentValidatorDirective,
    multi: true
  }]
})
export class CensorshipCommentValidatorDirective implements AsyncValidator {
  constructor(private forumService: ForumService) { }
  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return this.forumService.getBlacklistedItems().pipe(map((response) =>
    {
      let text:string = control.value;
      
      let hasError: boolean;
      for(let i = 0; i< response.length;i++)
      {
        if(text.includes(response[i].value))
        {
          return {'censorship_comment':true};
        }
      }
      return null;
    }));
  }
  registerOnValidatorChange?(fn: () => void): void {
    
  }

}
