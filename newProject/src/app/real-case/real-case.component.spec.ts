import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealCaseComponent } from './real-case.component';

describe('RealCaseComponent', () => {
  let component: RealCaseComponent;
  let fixture: ComponentFixture<RealCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
