import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients:Patient[]
  constructor(private patientService:PatientService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }


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
  deletePatient(patientID:number){
    this.patientService.deletePatient(patientID).subscribe(
      response=>{
        this.toastrService.success("Patient SuccessfullyDeleted")
        

      }
    )
  }

}
