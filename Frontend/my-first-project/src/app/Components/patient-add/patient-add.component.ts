import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  addPatientForm:FormGroup
  constructor(
    private patientService:PatientService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.createAddPatientForm()
  }
  createAddPatientForm(){
    this.addPatientForm=this.formBuilder.group(
      {
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

  add(){
    let patientModel=Object.assign({},this.addPatientForm.value)
    if (this.addPatientForm.valid) {
        this.patientService.add(patientModel).subscribe(

          response=>{
            this.toastrService.success("Patient Added Successfully")
            this.router.navigateByUrl("/refresh",{skipLocationChange:true}).then(()=>{
              this.router.navigate(["patients"])
            })
          }
        )
      
    }
    else{
      this.toastrService.error("Something went wrong")
    }

  }


}
