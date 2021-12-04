import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalToolAddComponent } from './medical-tool-add.component';

describe('MedicalToolAddComponent', () => {
  let component: MedicalToolAddComponent;
  let fixture: ComponentFixture<MedicalToolAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalToolAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalToolAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
