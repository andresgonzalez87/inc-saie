import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Professional } from '../../models/professional';
import { NavbarComponent } from "../navbar/navbar.component";



@Component({
    selector: 'app-create-professional',
    standalone: true,
    templateUrl: './create-professional.component.html',
    styleUrl: './create-professional.component.css',
    imports: [CommonModule, RouterLink, ReactiveFormsModule, NavbarComponent]
})
export class CreateProfessionalComponent {

  professionalForm: FormGroup;

  constructor (private fb: FormBuilder,
              private router: Router) {
    this.professionalForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      contact: ['', Validators.required],
      patients: ['', Validators.required],
    })
  }

  addProfessional() {
    const professional: Professional = {
      name : this.professionalForm.get('name')?.value,
      title : this.professionalForm.get('title')?.value,
      contact : this.professionalForm.get('contact')?.value,
      patients : this.professionalForm.get('patients')?.value,
      
    }
    console.log(professional)
    this.router.navigate(['/profesionales'])
  }

}

