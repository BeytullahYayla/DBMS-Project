import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalTool } from 'src/app/Models/medicalTool';

import { MedicalToolsService } from 'src/app/Services/medical-tools.service';

@Component({
  selector: 'app-medical-tools',
  templateUrl: './medical-tools.component.html',
  styleUrls: ['./medical-tools.component.css']
})
export class MedicalToolsComponent implements OnInit {

  medicals:MedicalTool[]=[];
 selam="ben beyt"
  constructor(private httpClient:HttpClient,private medicalToolService:MedicalToolsService) { }
 
  ngOnInit(): void {
    this.getAll()
    
  }

  // getAll(){
  //   this.medicalToolService.getMedicalTools().subscribe(
  //     response=>{
  //       this.medicals=response
  //     }
  //   )
  // }
  getAll(){
    this.httpClient.get<MedicalTool[]>('http://localhost:43082/api/MedicalTool/getall').subscribe(response=>{
      this.medicals=response
    });
  }

}
