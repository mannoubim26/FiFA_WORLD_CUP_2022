import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buynow1Component } from './buynow1.component';

describe('Buynow1Component', () => {
  let component: Buynow1Component;
  let fixture: ComponentFixture<Buynow1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Buynow1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buynow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
