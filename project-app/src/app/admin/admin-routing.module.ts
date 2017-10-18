import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import {EtablissementsComponent} from './etablissements/etablissements.component';
import {EtablissementComponent} from './etablissement/etablissement.component';

const adminRoutes: Routes = [
  { path: 'Admin',
    component: AdminComponent,
    children: [
      { path: 'Etablissements', component: EtablissementsComponent},
      { path: 'Etablissement/:id', component: EtablissementComponent}
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