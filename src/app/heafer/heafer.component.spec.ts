import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaferComponent } from './heafer.component';

describe('HeaferComponent', () => {
  let component: HeaferComponent;
  let fixture: ComponentFixture<HeaferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
