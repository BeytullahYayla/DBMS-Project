import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {

  updatePatientForm:FormGroup
  patient:Patient[]
  constructor(private patientService:PatientService,private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.createUpdatePatientForm()
    this.activatedRoute.params.subscribe(
      params=>{
        if (params["patientID"]) {
          this.getByPatientID(params["patientID"])
        }
      }
    )
  }

  getByPatientID(patientID:number){
    this.patientService.getByPatientID(patientID).subscribe(
      response=>{
        this.patient=response
      }
    )

  }
  update(){
    let patientModel=Object.assign({},this.updatePatientForm.value)
    if (this.updatePatientForm.valid) {
      this.patientService.update(patientModel).subscribe(
        response=>{
          this.toastrService.success("Updated Successfully")
          this.router.navigateByUrl("/refresh",{skipLocationChange:true}).then(()=>{
              
            this.router.navigate(["patients"])
        }
      )
      
    })}
    else{
      this.toastrService.error("Something went wrong")
    }


  
}
  createUpdatePatientForm(){
    this.updatePatientForm=this.formBuilder.group(
      {
        PatientID:["",Validators.required],
        PatientCategoryID:["",Validators.required],
        VeterinerianID:["",Validators.required],
        PetOwnerID:["",Validators.required],
        DiagnosisID:["",Validators.required],
        PatientRoomID:["",Validators.required],
        PatientName:["",Validators.required],
        PatientAge:["",Validators.required]

      }
    )
    

  }

}
