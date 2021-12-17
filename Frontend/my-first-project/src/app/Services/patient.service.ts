import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../Models/patient';
import { PatientDetail } from '../Models/patientDetail';
import { PatientRecords } from '../Models/patientRecords';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiUrl="http://localhost:43082/api/"
  constructor(private httpClient:HttpClient) { }

  getPatientDetails():Observable<PatientDetail[]>{
    let newPath=this.apiUrl+"Patient/getpatientdetails"
    return this.httpClient.get<PatientDetail[]>(newPath)
  }
  deletePatient(patientID:number){
    let newPath=this.apiUrl+"Patient/delete?patientID="+patientID
    return this.httpClient.post(newPath,patientID)
  }
  add(patient:Patient){
    let newPath=this.apiUrl+"Patient/addpatient"
    return this.httpClient.post(newPath,patient);

  }
  update(patient:Patient){
    let newPath=this.apiUrl+"Patient/updatepatient"
    return this.httpClient.post(newPath,patient);
  }
  getByPatientID(patientID:number):Observable<Patient[]>{
    let newPath=this.apiUrl+"Patient/getbypatientid?patientID="+patientID
    return this.httpClient.get<Patient[]>(newPath)

  }
  getPatientRecords():Observable<PatientRecords[]>{
    let newPath=this.apiUrl+"Patient/getpatientrecords"
    return this.httpClient.get<PatientRecords[]>(newPath)
  }
  

 
}
