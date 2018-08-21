import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import {EtablissementsComponent} from './etablissements/etablissements.component';
import {EtablissementComponent} from './etablissement/etablissement.component';
import {MatieresComponent} from './matieres/matieres.component';
import {ProfesseursComponent} from './professeurs/professeurs.component';
import { AddEtablissementFormComponent } from './add-etablissement-form/add-etablissement-form.component';
import { AddProfesseurFormComponent } from './add-professeur-form/add-professeur-form.component';
import { ProfesseurComponent } from './professeur/professeur.component';

const adminRoutes: Routes = [
  { path: 'Admin',
    component: AdminComponent,
    children: [
      { path: 'Etablissements', component: EtablissementsComponent},
      { path: 'Etablissement/:id', component: EtablissementComponent},
      { path: 'Edit/etablissement/:id', component: AddEtablissementFormComponent},
      { path: 'Matieres', component: MatieresComponent},
      { path: 'Professeurs', component: ProfesseursComponent},
      { path: 'Professeur/:id', component: ProfesseurComponent},
      { path: 'Edit/Professeur/:id', component: AddProfesseurFormComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
