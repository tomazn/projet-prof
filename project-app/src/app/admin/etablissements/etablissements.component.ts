import { Component, OnInit } from '@angular/core';
import { EtablissementsService } from './etablissements.service';

@Component({
  selector: 'app-etablissements',
  templateUrl: './etablissements.component.html',
  styleUrls: ['./etablissements.component.css']
})
export class EtablissementsComponent implements OnInit {

   Etablissements: any = [];

  constructor(private _EtablissementsService: EtablissementsService) { }

  ngOnInit() {
    this._EtablissementsService.GetEtablissements().then(
      data => this.Etablissements = data,
      error => console.log(error)
    );
  }

}
