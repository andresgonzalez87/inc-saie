// modelo de paciente

export class Patient {

    // propiedades
    _id?: number;
    name: string;
    age: number;
    socialWork: string;
    diagnosis: string;
    contact: number;
    professional: string;
    service: string;
    school: string;
    schoolAddress: string;
    schoolContact: number;
    teacher: string;
    teacherContact: number;
    
    // constructor
    // que se inicializa cuando creamos un paciente
    constructor( name: string, 
                 age: number, 
                 socialWork: string, 
                 diagnosis: string, 
                 contact: number, 
                 professional: string,
                 service: string,
                 school: string,
                 schoolAddress: string,
                 schoolContact: number,
                 teacher: string,
                 teacherContact: number) {

        this.name = name,
        this.age = age,
        this.socialWork = socialWork,
        this.diagnosis = diagnosis,
        this.contact = contact,
        this.professional = professional,
        this.service = service,
        this.school = school,
        this.schoolAddress = schoolAddress,
        this.schoolContact = schoolContact,
        this.teacher = teacher,
        this.teacherContact = teacherContact
    }
}