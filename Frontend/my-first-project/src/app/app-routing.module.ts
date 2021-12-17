import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalToolAddComponent } from './Components/medical-tool-add/medical-tool-add.component';
import { MedicalToolUpdateComponent } from './Components/medical-tool-update/medical-tool-update.component';
import { MedicalToolsComponent } from './Components/medical-tools/medical-tools.component';
import { PatientAddComponent } from './Components/patient-add/patient-add.component';
import { PatientUpdateComponent } from './Components/patient-update/patient-update.component';
import { PatientComponent } from './Components/patient/patient.component';
import { PatientrecordComponent } from './Components/patientrecord/patientrecord.component';


const routes: Routes = [
    {path:"",pathMatch:"full",component:MedicalToolsComponent},
    {path:"medicalTools",pathMatch:"full",component:MedicalToolsComponent},
    {path:"medicalTools/update/:medicalToolID",pathMatch:"full",component:MedicalToolUpdateComponent},
    {path:"medicalTools/add",pathMatch:"full",component:MedicalToolAddComponent},
    {path:"refresh",component:MedicalToolsComponent},
    {path:"patients",pathMatch:"full", component:PatientComponent},
    {path:"patients/add",component:PatientAddComponent},
    {path:"patients/update/:patientID",component:PatientUpdateComponent},
    {path:"patientRecords",component:PatientrecordComponent}
    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }