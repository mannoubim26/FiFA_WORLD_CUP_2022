import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlKhorComponent } from './al-khor.component';

describe('AlKhorComponent', () => {
  let component: AlKhorComponent;
  let fixture: ComponentFixture<AlKhorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlKhorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlKhorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
