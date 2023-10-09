import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LusailComponent } from './lusail.component';

describe('LusailComponent', () => {
  let component: LusailComponent;
  let fixture: ComponentFixture<LusailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LusailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LusailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
