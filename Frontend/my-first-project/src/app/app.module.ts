import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MedicalToolsComponent } from './Components/medical-tools/medical-tools.component';
import { NavComponent } from './Components/nav/nav.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MedicalToolUpdateComponent } from './Components/medical-tool-update/medical-tool-update.component'
import { AppRoutingModule } from './app-routing.module';
import { MedicalToolAddComponent } from './Components/medical-tool-add/medical-tool-add.component';
import { PatientComponent } from './Components/patient/patient.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicalToolsComponent,
    NavComponent,
    MedicalToolUpdateComponent,
    MedicalToolAddComponent,
    PatientComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    
    
    
  ],
  providers: [HttpClientModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
