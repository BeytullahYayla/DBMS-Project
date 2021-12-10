import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalToolAddComponent } from './Components/medical-tool-add/medical-tool-add.component';
import { MedicalToolUpdateComponent } from './Components/medical-tool-update/medical-tool-update.component';
import { MedicalToolsComponent } from './Components/medical-tools/medical-tools.component';


const routes: Routes = [
    {path:"",pathMatch:"full",component:MedicalToolsComponent},
    {path:"medicalTools",pathMatch:"full",component:MedicalToolsComponent},
    {path:"medicalTools/update/:medicalToolID",pathMatch:"full",component:MedicalToolUpdateComponent},
    {path:"medicalTools/add",pathMatch:"full",component:MedicalToolAddComponent},
    {path:"refresh",component:MedicalToolsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }