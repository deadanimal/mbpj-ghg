import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonEmissionFactorsComponent } from './carbon-emission-factors.component';

describe('CarbonEmissionFactorsComponent', () => {
  let component: CarbonEmissionFactorsComponent;
  let fixture: ComponentFixture<CarbonEmissionFactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbonEmissionFactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbonEmissionFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
