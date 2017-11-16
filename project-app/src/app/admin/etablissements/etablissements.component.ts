import { Component, OnInit} from '@angular/core';

import { Etablissement } from '../../model/etablissement';

import { EtablissementsService } from '../../services/etablissements.service';


@Component({
  selector: 'app-etablissements',
  templateUrl: './etablissements.component.html',
  styleUrls: ['./etablissements.component.css']
})
export class EtablissementsComponent implements OnInit {

  Etablissements: Etablissement[];

  constructor(private _EtablissementsService: EtablissementsService) { }

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
    this._EtablissementsService.DeleteEtablissement(id);
    this.GetEtablissements();
  }


  EtablissementAdded(e: boolean): void {
    if (e) {
      this.GetEtablissements();
    }
  }
}
