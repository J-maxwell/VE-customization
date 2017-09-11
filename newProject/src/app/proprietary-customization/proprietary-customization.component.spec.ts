import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietaryCustomizationComponent } from './proprietary-customization.component';

describe('ProprietaryCustomizationComponent', () => {
  let component: ProprietaryCustomizationComponent;
  let fixture: ComponentFixture<ProprietaryCustomizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProprietaryCustomizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietaryCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
