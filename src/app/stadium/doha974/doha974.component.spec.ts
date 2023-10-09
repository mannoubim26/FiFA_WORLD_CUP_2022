import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doha974Component } from './doha974.component';

describe('Doha974Component', () => {
  let component: Doha974Component;
  let fixture: ComponentFixture<Doha974Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Doha974Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doha974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
