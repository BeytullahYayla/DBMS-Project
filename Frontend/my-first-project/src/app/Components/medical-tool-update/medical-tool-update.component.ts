import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MedicalTool } from 'src/app/Models/medicalTool';
import { MedicalToolsService } from 'src/app/Services/medical-tools.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-medical-tool-update',
  templateUrl: './medical-tool-update.component.html',
  styleUrls: ['./medical-tool-update.component.css']
})
export class MedicalToolUpdateComponent implements OnInit {

  medicalToolUpdateForm:FormGroup
  medicalTool:MedicalTool[]
  constructor(private medicalToolService:MedicalToolsService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private router:Router,
    private location:Location
     
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        if (params["medicalToolID"]) {
          this.getByMedicalToolID(params["medicalToolID"])
          
        }
      }
    )
    this.createUpdateMedicalToolForm()
  }
 
  update(){

    let medicalToolModel=Object.assign({},this.medicalToolUpdateForm.value)
    
    if (this.medicalToolUpdateForm.valid) {
          this.medicalToolService.update(medicalToolModel).subscribe(
            response=>{

             this.toastrService.success("Medical Tool Successfully Updated")
             this.router.navigateByUrl("/refresh",{skipLocationChange:true}).then(()=>{
              
              this.router.navigate(["medicalTools"])
            })

            }
            
            
          )  
    }
    else{
      this.toastrService.error("Something went wrong")
      
    }
    
   

  

}
createUpdateMedicalToolForm(){
  this.medicalToolUpdateForm=this.formBuilder.group(
    {
      ToolID:["",Validators.required],
      ToolName:["",Validators.required]
    }
  )

}
getByMedicalToolID(medicalToolID:number){
  this.medicalToolService.getByMedicalToolID(medicalToolID).subscribe(
    response=>{
      this.medicalTool=response
    }
    
  )

}

}
