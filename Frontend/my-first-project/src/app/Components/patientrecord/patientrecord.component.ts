import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientRecords } from '../../Models/patientRecords';
import { PatientService } from '../../Services/patient.service';

@Component({
  selector: 'app-patientrecord',
  templateUrl: './patientrecord.component.html',
  styleUrls: ['./patientrecord.component.css']
})
export class PatientrecordComponent implements OnInit {

  patientRecords:PatientRecords[]=[]
  constructor(
    private router:Router,
    private patientService:PatientService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    


  ) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.patientService.getPatientRecords().subscribe(
      response=>{
        this.patientRecords=response
      }
    )
  }

}
