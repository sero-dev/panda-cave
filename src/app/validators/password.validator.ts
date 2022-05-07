import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value || '';

    const notEmpty = !!value;
    const hasMininiumCharacter = value.length >= 8;
    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const hasSpecialCharacter = /[@,%,+,!,#,$,^,?,:,(,),{,},\[,\],~,;]+/.test(value);

    if (notEmpty && hasMininiumCharacter && hasUpperCase && hasLowerCase && hasNumeric && hasSpecialCharacter) {
      return null;
    }

    return {
      required: !notEmpty,
      notLong: !hasMininiumCharacter,
      noUpperCase: !hasUpperCase,
      noLowerCase: !hasLowerCase,
      noNumber:!hasNumeric,
      noSpecialChar: !hasSpecialCharacter
    };
  }
}