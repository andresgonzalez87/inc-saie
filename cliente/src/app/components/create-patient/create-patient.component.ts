import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Patient } from '../../models/patient';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-create-patient',
  standalone: true,
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css',
  providers: [PatientService],
  imports: [CommonModule, RouterLink, ReactiveFormsModule, NavbarComponent, HttpClientModule]
})
export class CreatePatientComponent implements OnInit {

  patientForm: FormGroup;
  title = 'NUEVO PACIENTE';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _patientService: PatientService,
    private aRouter: ActivatedRoute) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      socialWork: ['', Validators.required],
      diagnosis: ['', Validators.required],
      contact: ['', Validators.required],
      professional: ['', Validators.required],
      service: ['', Validators.required],
      school: ['', Validators.required],
      schoolAddress: ['', Validators.required],
      schoolContact: ['', Validators.required],
      teacher: ['', Validators.required],
      teacherContact: ['', Validators.required],

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editPatient()
  }

  addPatient() {
    const patient: Patient = {
      name: this.patientForm.get('name')?.value,
      age: this.patientForm.get('age')?.value,
      socialWork: this.patientForm.get('socialWork')?.value,
      diagnosis: this.patientForm.get('diagnosis')?.value,
      contact: this.patientForm.get('contact')?.value,
      professional: this.patientForm.get('professional')?.value,
      service: this.patientForm.get('service')?.value,
      school: this.patientForm.get('school')?.value,
      schoolAddress: this.patientForm.get('schoolAddress')?.value,
      schoolContact: this.patientForm.get('schoolContact')?.value,
      teacher: this.patientForm.get('teacher')?.value,
      teacherContact: this.patientForm.get('teacherContact')?.value,
    }
    if (this.id !== null) {
      //editamos paciente
      this._patientService.editPatient(this.id, patient).subscribe(data => {
        console.log('Paciente editado con exito')
        this.router.navigate(['/pacientes'])
        this.patientForm.reset();
      }, error => {
        console.log(error);
        this.patientForm.reset();
      })
    } else {
      //agregamos paciente
      console.log(patient)
      this._patientService.addPatient(patient).subscribe(data => {
        this.router.navigate(['/pacientes'])
      }, error => {
        console.log(error);
        this.patientForm.reset();
      })
    }
  }

  editPatient() {
    if (this.id !== null) {
      this.title = 'EDITAR PACIENTE';
      this._patientService.getPatient(this.id).subscribe(data => {
        this.patientForm.setValue({
          name: data.name,
          age: data.age,
          socialWork: data.socialWork,
          diagnosis: data.diagnosis,
          contact: data.contact,
          professional: data.professional,
          service: data.service,
          school: data.school,
          schoolAddress: data.schoolAddress,
          schoolContact: data.schoolContact,
          teacher: data.teacher,
          teacherContact: data.teacherContact,
        })
      })
    }
  }
}
