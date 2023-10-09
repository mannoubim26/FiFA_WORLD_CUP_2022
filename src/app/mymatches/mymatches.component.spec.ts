import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymatchesComponent } from './mymatches.component';

describe('MymatchesComponent', () => {
  let component: MymatchesComponent;
  let fixture: ComponentFixture<MymatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
