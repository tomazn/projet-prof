import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseursComponent } from './professeurs.component';

describe('ProfesseurComponent', () => {
  let component: ProfesseursComponent;
  let fixture: ComponentFixture<ProfesseursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesseursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
