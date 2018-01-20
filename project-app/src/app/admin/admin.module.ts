import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminComponent } from './admin/admin.component';
import { EtablissementsComponent } from './etablissements/etablissements.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import {MatieresComponent} from './matieres/matieres.component';

import { AddEtablissementFormComponent } from './add-etablissement-form/add-etablissement-form.component';
import { AddMatiereFormComponent } from './add-matiere-form/add-matiere-form.component';

import { EtablissementsService } from '../services/etablissements.service';
import { MatieresService} from '../services/matieres.service';

import {AdminRoutingModule} from './admin-routing.module';
import { ProfesseurComponent } from './professeur/professeur.component';

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
    AddEtablissementFormComponent,
    MatieresComponent,
    AddMatiereFormComponent,
    ProfesseurComponent
  ],
  providers: [
    EtablissementsService,
    MatieresService
  ]
})

export class AdminModule {}
