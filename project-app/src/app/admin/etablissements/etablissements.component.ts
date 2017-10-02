import { Component, OnInit } from '@angular/core';

import { Etablissement } from '../../model/etablissement';

import { EtablissementsService } from '../../services/etablissements.service';
import { EtablissementService} from '../../services/etablissement.service';

@Component({
  selector: 'app-etablissements',
  templateUrl: './etablissements.component.html',
  styleUrls: ['./etablissements.component.css']
})
export class EtablissementsComponent implements OnInit {

   Etablissements: Etablissement[] = [];

  constructor(private _EtablissementsService: EtablissementsService, private _EtablissementService: EtablissementService) { }

  ngOnInit() {
    this.GetEtablissements();
  }

  GetEtablissements(): void {
    this._EtablissementsService.GetEtablissements().then(
      data => this.Etablissements = data,
      error => console.log(error)
    );
  }

   DeleteEtablissement(id): void {
    this._EtablissementService.DeleteEtablissement(id);
    this.GetEtablissements();
  }

}
