import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DohaAlThumamaComponent } from './doha-al-thumama.component';

describe('DohaAlThumamaComponent', () => {
  let component: DohaAlThumamaComponent;
  let fixture: ComponentFixture<DohaAlThumamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DohaAlThumamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DohaAlThumamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
