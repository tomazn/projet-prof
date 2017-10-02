import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Etablissement} from '../../model/etablissement';

import { EtablissementService } from '../../services/etablissement.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {

  private Etablissement: Etablissement = null

  constructor(private _EtablissementService: EtablissementService, private Route: ActivatedRoute) { }

  ngOnInit() {
    const id =  this.Route.snapshot.params['id'];
    this._EtablissementService.GetEtablissement(id).then(
      data => this.Etablissement = data,
      error => console.log(error),
    );
  }

}
