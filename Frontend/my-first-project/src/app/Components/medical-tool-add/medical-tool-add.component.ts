import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MedicalTool } from 'src/app/Models/medicalTool';
import { MedicalToolsService } from 'src/app/Services/medical-tools.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-medical-tool-add',
  templateUrl: './medical-tool-add.component.html',
  styleUrls: ['./medical-tool-add.component.css']
})
export class MedicalToolAddComponent implements OnInit {

  addMedicalToolForm:FormGroup

  constructor(private formBuilder:FormBuilder,
    private medicalToolService:MedicalToolsService,
    private toastrService:ToastrService,
    private router:Router,
    private location:Location
    ) { }

  ngOnInit(): void {
    this.createAddMedicalToolForm()
}
  createAddMedicalToolForm(){
    this.addMedicalToolForm=this.formBuilder.group(
      {
        ToolName:["",Validators.required]
        
      }
    )
  
  }

  addMedicalTool(){
    let medicalToolModel=Object.assign({},this.addMedicalToolForm.value)
    
    if (this.addMedicalToolForm.valid) {
          this.medicalToolService.add(medicalToolModel).subscribe(
            response=>{
              this.toastrService.success("Medical Tool Added Successfully")
              this.router.navigateByUrl("/refresh",{skipLocationChange:true}).then(()=>{
                this.router.navigate(["medicalTools"])
              })
             

            }
            
            
          )  
    }
    else{
      this.toastrService.error("Form is missing")
      
    }
    
   


    
  }
}
