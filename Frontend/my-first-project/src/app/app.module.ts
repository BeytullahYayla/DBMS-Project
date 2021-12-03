import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicalToolsComponent } from './Components/medical-tools/medical-tools.component';
import { NavComponent } from './Components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicalToolsComponent,
    NavComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
