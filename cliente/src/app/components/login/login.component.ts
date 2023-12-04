import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterLink } from '@angular/router';


@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [CommonModule, NavbarComponent, RouterLink, ReactiveFormsModule]
})
export class LoginComponent {

    loginForm: FormGroup;
    title = 'Lic. Loana Heredia';


    constructor(private fb: FormBuilder,
        private router: Router,
        private aRouter: ActivatedRoute) {
        this.loginForm = this.fb.group({
            user: ['', Validators.required],
            password: ['', Validators.required],
        })
    }
}  
