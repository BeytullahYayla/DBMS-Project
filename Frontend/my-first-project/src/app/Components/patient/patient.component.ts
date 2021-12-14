import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/Models/patient';
import { PatientDetail } from 'src/app/Models/patientDetail';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients:PatientDetail[]
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
        this.toastrService.success("Patient Successfully Deleted")
        

      }
    )
  }
  update(patient:Patient){
    this.patientService.update(patient).subscribe(
      response=>{
        this.toastrService.success("Patient Updated Successfully");
      }
    )
  }

}
