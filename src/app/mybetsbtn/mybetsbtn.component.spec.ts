import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybetsbtnComponent } from './mybetsbtn.component';

describe('MybetsbtnComponent', () => {
  let component: MybetsbtnComponent;
  let fixture: ComponentFixture<MybetsbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybetsbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MybetsbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
