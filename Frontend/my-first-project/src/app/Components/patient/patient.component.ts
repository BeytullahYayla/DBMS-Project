import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/Models/patient';
import { PatientDetail } from 'src/app/Models/patientDetail';
import { PatientService } from 'src/app/Services/patient.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients:PatientDetail[]
  constructor(private patientService:PatientService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService,
    private router:Router,
    private location:Location
    ) { }


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
        this.router.navigateByUrl("/refresh",{skipLocationChange:true}).then(()=>{
          this.router.navigate(["patients"])
        })
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
