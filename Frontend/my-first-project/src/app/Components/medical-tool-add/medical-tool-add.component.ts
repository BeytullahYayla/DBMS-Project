import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicalTool } from 'src/app/Models/medicalTool';
import { MedicalToolsService } from 'src/app/Services/medical-tools.service';

@Component({
  selector: 'app-medical-tool-add',
  templateUrl: './medical-tool-add.component.html',
  styleUrls: ['./medical-tool-add.component.css']
})
export class MedicalToolAddComponent implements OnInit {

  addMedicalToolForm:FormGroup

  constructor(private formBuilder:FormBuilder,
    private medicalToolService:MedicalToolsService
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
              console.log("Ekleme Basarili")
             

            }
            
            
          )  
    }
    else{
      console.log("Form Eksik")
      
    }
    
   


    
  }
}
