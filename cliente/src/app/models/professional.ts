// modelo de profesional

export class Professional {

    // propiedades
    _id?: number;
    name: string;
    title: string;
    contact: number;
   patients: string;
    
    // constructor
    // que se inicializa cuando creamos un profesional
    constructor( name: string,  
                 title: string,
                 contact: number,
                 patients: string) {

        this.name = name,
        this.title = title,
        this.contact = contact,
        this.patients = patients
    }
}