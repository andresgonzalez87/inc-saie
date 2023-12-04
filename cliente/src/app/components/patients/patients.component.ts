// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from '../../services/patient.service';
import { Observable } from 'rxjs';
import { Patient } from '../../models/patient';
import { error } from 'console';



@Component({
    selector: 'app-patients',
    standalone: true,
    templateUrl: './patients.component.html',
    styleUrl: './patients.component.css',
    providers: [PatientService],
    // imports: [CommonModule, RouterLink, NavbarComponent, HttpClientModule]
    imports: [CommonModule, NavbarComponent, HttpClientModule, RouterLink]
})
export class PatientsComponent implements OnInit {

    title: string = 'PACIENTES';
    listPatients: Patient[] = [];

    constructor(private _patientsService: PatientService, private router: Router) { }

    ngOnInit(): void {
        this.getPatients();
    }

    getPatients() {
        this._patientsService.getPatients().subscribe(data => {
            console.log(data)
            this.listPatients = data;
        }, error => {
            console.log(error)
        })
    }

    deletePatient(id: any) {
        this._patientsService.deletePatient(id).subscribe(data => {
            this.getPatients()
        }, error => {
            console.log(error)
        })
    }
}
