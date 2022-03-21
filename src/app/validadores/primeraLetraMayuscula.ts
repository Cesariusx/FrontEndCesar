import { AbstractControl, ValidatorFn } from "@angular/forms";

export function primeraLetraMayusdcula() : ValidatorFn {
    return (control: AbstractControl) => {
        const valor = <string>control.value;
        if (!valor) return;
        if (valor.length===0) return;

        const primeraLetra = valor[0];
        if (primeraLetra !== primeraLetra.toLocaleUpperCase()){
            return {
                primeraLetraMayusdcula: {
                    mensaje: 'La primera letra debe ser mayuscula'
                }
            };
        }
        
        return;
    }
}