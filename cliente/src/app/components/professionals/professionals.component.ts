import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-professionals',
    standalone: true,
    templateUrl: './professionals.component.html',
    styleUrl: './professionals.component.css',
    imports: [CommonModule, RouterLink, NavbarComponent]
})
export class ProfessionalsComponent {

    title: string = 'PROFESIONALES'

}