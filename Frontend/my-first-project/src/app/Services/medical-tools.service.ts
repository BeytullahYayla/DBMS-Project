import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../Models/SingleResponseModel';
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



}
