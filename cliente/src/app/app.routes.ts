import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Patient } from './models/patient';
// componentes
import { PatientsComponent } from './components/patients/patients.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { ProfessionalsComponent } from './components/professionals/professionals.component';
import { EditProfessionalComponent } from './components/edit-professional/edit-professional.component';
import { CreateProfessionalComponent } from './components/create-professional/create-professional.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoordinationComponent } from './components/coordination/coordination.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'nosotros', component: AboutComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'coordinacion', component: CoordinationComponent },
    { path: 'pacientes', component: PatientsComponent },
    { path: 'editar-paciente/:id', component: CreatePatientComponent },
    { path: 'crear-paciente', component: CreatePatientComponent},
    { path: 'profesionales', component: ProfessionalsComponent },
    { path: 'editar-profesional/id', component: EditProfessionalComponent },
    { path: 'crear-profesional', component: CreateProfessionalComponent},
    { path: 'iniciar-sesión', component: LoginComponent},
    // para ruta inexistente
    { path: '**', redirectTo: '', pathMatch: 'full' }
    
];
