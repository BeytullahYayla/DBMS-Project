import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalToolsComponent } from './medical-tools.component';

describe('MedicalToolsComponent', () => {
  let component: MedicalToolsComponent;
  let fixture: ComponentFixture<MedicalToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
