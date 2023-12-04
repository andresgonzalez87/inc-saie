import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router, RouterLink } from '@angular/router';


@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [CommonModule, NavbarComponent, RouterLink],   
})

export class AboutComponent {
title: string = 'Sobre nosotros';

}
