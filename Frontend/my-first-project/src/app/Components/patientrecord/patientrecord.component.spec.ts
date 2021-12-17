import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientrecordComponent } from './patientrecord.component';

describe('PatientrecordComponent', () => {
  let component: PatientrecordComponent;
  let fixture: ComponentFixture<PatientrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
