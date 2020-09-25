import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatriculeComponent } from './list-matricule.component';

describe('ListMatriculeComponent', () => {
  let component: ListMatriculeComponent;
  let fixture: ComponentFixture<ListMatriculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMatriculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMatriculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
