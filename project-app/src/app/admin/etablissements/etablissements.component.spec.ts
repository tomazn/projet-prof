/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EtablissementsComponent } from './etablissements.component';

describe('EtablissementsComponent', () => {
  let component: EtablissementsComponent;
  let fixture: ComponentFixture<EtablissementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtablissementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtablissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
