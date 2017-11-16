import { Component, OnInit } from '@angular/core';
import {Matiere} from '../../model/matiere';
import { MatieresService } from '../../services/matieres.service';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent implements OnInit {
  Matieres: Matiere[];

  constructor(private _MatiereService: MatieresService) { }

  ngOnInit() {
    this.GetMatieres();
  }

  GetMatieres(): void {
    this._MatiereService.GetMatieres()
      .then(res => this.Matieres = res)
      .catch( err => console.log(err));
  }

  DeleteMatiere(id): void {
    this._MatiereService.DeleteMatiere(id);
    this.GetMatieres();
  }

  MatiereAdded(e: boolean): void {
    if (e) {
      this.GetMatieres();
    }
  }
}
