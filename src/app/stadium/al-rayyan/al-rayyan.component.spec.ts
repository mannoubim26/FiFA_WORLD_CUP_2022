import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlRayyanComponent } from './al-rayyan.component';

describe('AlRayyanComponent', () => {
  let component: AlRayyanComponent;
  let fixture: ComponentFixture<AlRayyanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlRayyanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlRayyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
