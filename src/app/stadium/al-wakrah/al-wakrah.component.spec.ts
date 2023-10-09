import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlWakrahComponent } from './al-wakrah.component';

describe('AlWakrahComponent', () => {
  let component: AlWakrahComponent;
  let fixture: ComponentFixture<AlWakrahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlWakrahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlWakrahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
