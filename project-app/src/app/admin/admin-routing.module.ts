import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import {EtablissementsComponent} from './etablissements/etablissements.component';
import {EtablissementComponent} from './etablissement/etablissement.component';
import {MatieresComponent} from './matieres/matieres.component';
import {ProfesseurComponent} from './professeur/professeur.component';
import { AddEtablissementFormComponent } from './add-etablissement-form/add-etablissement-form.component';

const adminRoutes: Routes = [
  { path: 'Admin',
    component: AdminComponent,
    children: [
      { path: 'Etablissements', component: EtablissementsComponent},
      { path: 'Etablissement/:id', component: EtablissementComponent},
      { path: 'Edit/etablissement/:id', component: AddEtablissementFormComponent},
      { path: 'Matieres', component: MatieresComponent},
      { path: 'Professeurs', component: ProfesseurComponent}
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
