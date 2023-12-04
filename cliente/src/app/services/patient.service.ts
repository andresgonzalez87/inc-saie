import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  url = "http://localhost:4000/api/pacientes/";

  constructor(private http: HttpClient) { }

  getPatients (): Observable<any> {
    return this.http.get(this.url);
  }

  deletePatient (id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  addPatient(patient: Patient) : Observable<any> {
    return this.http.post(this.url, patient);
  }

  getPatient (id:string): Observable<any> {
    return this.http.get(this.url+id);
  }

  editPatient (id: string, patient: Patient): Observable<any> {
    return this.http.put(this.url + id, patient)
  }
}


