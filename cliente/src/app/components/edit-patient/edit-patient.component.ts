import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-edit-patient',
    standalone: true,
    templateUrl: './edit-patient.component.html',
    styleUrl: './edit-patient.component.css',
    imports: [CommonModule, NavbarComponent, HttpClientModule, RouterLink]
})
export class EditPatientComponent {

}
