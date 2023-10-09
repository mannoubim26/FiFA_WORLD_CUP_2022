import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteldComponent } from './hoteld.component';

describe('HoteldComponent', () => {
  let component: HoteldComponent;
  let fixture: ComponentFixture<HoteldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoteldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
