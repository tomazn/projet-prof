import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfesseurFormComponent } from './add-professeur-form.component';

describe('AddProfesseurFormComponent', () => {
  let component: AddProfesseurFormComponent;
  let fixture: ComponentFixture<AddProfesseurFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfesseurFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfesseurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
