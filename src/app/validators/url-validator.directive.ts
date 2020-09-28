import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
@Directive({
  selector: '[appUrlValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi:true}]
})
export class UrlValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null{

    if(control.value.startsWith("http")) return null
    else return { urlInvalide : true}
  }
}



// @Directive({
//   selector: '[appForbiddenName]',
//   providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
// })
// export class ForbiddenValidatorDirective implements Validator {
//   @Input('appForbiddenName') forbiddenName: string;
//
//   validate(control: AbstractControl): {[key: string]: any} | null {
//     return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
//                               : null;
//   }
// }
