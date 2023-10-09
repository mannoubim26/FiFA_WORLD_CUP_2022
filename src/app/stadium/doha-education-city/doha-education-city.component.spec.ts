import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DohaEducationCityComponent } from './doha-education-city.component';

describe('DohaEducationCityComponent', () => {
  let component: DohaEducationCityComponent;
  let fixture: ComponentFixture<DohaEducationCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DohaEducationCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DohaEducationCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
