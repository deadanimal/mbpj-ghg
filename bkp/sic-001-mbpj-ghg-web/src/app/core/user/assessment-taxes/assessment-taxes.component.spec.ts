import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentTaxesComponent } from './assessment-taxes.component';

describe('AssessmentTaxesComponent', () => {
  let component: AssessmentTaxesComponent;
  let fixture: ComponentFixture<AssessmentTaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentTaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
