import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function repeatPasswordValidator(firstControl: string, secondControl: string): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const password = control?.get(firstControl)?.value;
    const confirm = control?.get(secondControl)?.value;

    const required = !!confirm;
    const matchesPassword = password === confirm;

    if (required && matchesPassword) return null;

    return {
      noMatch: !required || (required && !matchesPassword)
    }
  }
}