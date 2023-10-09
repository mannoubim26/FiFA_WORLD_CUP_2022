import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DohaKhalifaComponent } from './doha-khalifa.component';

describe('DohaKhalifaComponent', () => {
  let component: DohaKhalifaComponent;
  let fixture: ComponentFixture<DohaKhalifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DohaKhalifaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DohaKhalifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
