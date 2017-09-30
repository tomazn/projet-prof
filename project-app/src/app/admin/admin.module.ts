import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AdminComponent } from './admin/admin.component';
import { EtablissementsComponent } from './etablissements/etablissements.component';
import { EtablissementsService } from './etablissements/etablissements.service';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    EtablissementsComponent
  ],
  providers: [
    EtablissementsService
  ]
})

export class AdminModule {}
