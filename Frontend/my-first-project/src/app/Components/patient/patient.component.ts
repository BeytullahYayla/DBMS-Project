import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients:Patient[]
  constructor(private patientService:PatientService,private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.getPatientDetails()
  }
  getPatientDetails(){
    this.patientService.getPatientDetails().subscribe(
      response=>{
        this.patients=response
      }
    )
  }

}
