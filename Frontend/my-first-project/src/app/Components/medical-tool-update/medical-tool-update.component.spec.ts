import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalToolUpdateComponent } from './medical-tool-update.component';

describe('MedicalToolUpdateComponent', () => {
  let component: MedicalToolUpdateComponent;
  let fixture: ComponentFixture<MedicalToolUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalToolUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalToolUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
