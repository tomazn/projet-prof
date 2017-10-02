import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminComponent } from './admin/admin.component';
import { EtablissementsComponent } from './etablissements/etablissements.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { AddEtablissementFormComponent } from './add-etablissement-form/add-etablissement-form.component';

import { EtablissementsService } from '../services/etablissements.service';
import { EtablissementService} from '../services/etablissement.service';

import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    EtablissementsComponent,
    EtablissementComponent,
    AddEtablissementFormComponent
  ],
  providers: [
    EtablissementsService,
    EtablissementService
  ]
})

export class AdminModule {}
