import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NoSpaceValidator{
    static noSpace(control : AbstractControl) : ValidationErrors | null{
        if(control.value?.includes(' ')){
            return {noSpace : true}
        }else{
            return null
        }
    }
}