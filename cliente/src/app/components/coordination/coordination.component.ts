import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-coordination',
    standalone: true,
    templateUrl: './coordination.component.html',
    styleUrl: './coordination.component.css',
    imports: [CommonModule, NavbarComponent, RouterLink]
})
export class CoordinationComponent {

    title: string = 'Lic. Loana Heredia';
    
}
