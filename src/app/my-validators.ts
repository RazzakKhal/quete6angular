import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({
  providedIn : 'root'
})

export class MyValidators {

//   /** A hero's name can't match the given regular expression */
// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const forbidden = nameRe.test(control.value);
//     return forbidden ? {forbiddenName: {value: control.value}} : null;
//   };
// }

  isRequiredValidator(title : any, id : any){

    return () => {



if(title.value || id.value){

return null;
}else{
return {isRequired : "Veuillez remplir l'id ou le title"}}
}
    }



    rangeDateValidator(min : number, max : number){
      return (control : AbstractControl) => {

        if(min <= control.value && max >= control.value){
          return null;
        }else {

          return {min : `année min : ${min}, année max : ${max}`}
        }
      }
    }

}


