import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Etablissement} from '../../model/etablissement';

import { EtablissementsService } from '../../services/etablissements.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {

  private Etablissement: Etablissement = null

  constructor(private _EtablissementsService: EtablissementsService, private Route: ActivatedRoute) { }

  ngOnInit() {
    const id =  this.Route.snapshot.params['id'];
    this._EtablissementsService.GetEtablissement(id).then(
      data => this.Etablissement = data,
      error => console.log(error),
    );
  }

}
