import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-edit-professional',
    standalone: true,
    templateUrl: './edit-professional.component.html',
    styleUrl: './edit-professional.component.css',
    imports: [CommonModule, NavbarComponent]
})
export class EditProfessionalComponent {

}
