import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { MedicalTool } from '../Models/medicalTool';

@Injectable({
  providedIn: 'root'
})
export class MedicalToolsService {
  apiUrl="http://localhost:43082/api/"

  constructor(private httpClient:HttpClient) { }

  getMedicalTools():Observable<MedicalTool[]>{
    let newPath=this.apiUrl+"MedicalTool/getall"
    return this.httpClient.get<MedicalTool[]>(newPath)
  }
  getByMedicalToolID(medicalToolId:number):Observable<MedicalTool[]>{
    let newPath=this.apiUrl+"MedicalTool/getbymedicaltoolid?medicalToolID="+medicalToolId;
    return this.httpClient.get<MedicalTool[]>(newPath);
  }
  delete(medicalToolID:number){
    let newPath=this.apiUrl+"MedicalTool/delete?medicalToolID="+medicalToolID
    return this.httpClient.delete(newPath)
  }
  update(medicalTool:MedicalTool){
    let newPath="http://localhost:43082/api/MedicalTool/updatemedicaltool"
    return this.httpClient.post(newPath,medicalTool);
  }
  add(medicalTool:MedicalTool){
    let newPath=this.apiUrl+"MedicalTool/addmedicaltool"
    return this.httpClient.post(newPath,medicalTool)
  }



}
