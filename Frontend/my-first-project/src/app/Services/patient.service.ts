import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../Models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiUrl="http://localhost:43082/api/"
  constructor(private httpClient:HttpClient) { }

  getPatientDetails():Observable<Patient[]>{
    let newPath=this.apiUrl+"Patient/getpatientdetails"
    return this.httpClient.get<Patient[]>(newPath)
  }
  deletePatient(patientID:number){
    let newPath=this.apiUrl+"Patient/delete"
    return this.httpClient.post(newPath,patientID)
  }
}
