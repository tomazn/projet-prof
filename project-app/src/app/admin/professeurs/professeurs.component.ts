import { Component, OnInit } from '@angular/core';
import { ProfesseursService } from '../../services/professeurs.service';
import { professeur } from '../../model/professeur';

@Component({
  selector: 'app-professeur',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.css']
})
export class ProfesseursComponent implements OnInit {

  Professeurs: professeur;

  constructor(private ProfesseursService: ProfesseursService) { }

  ngOnInit() {
    this.getProfesseurs();
  }

  getProfesseurs(): void{
      this.ProfesseursService.getProfesseurs()
      .then(res => {
        this.Professeurs = res;
      }, error => console.log(error))
  }

  deleteProfesseur(id: String): void{
    this.ProfesseursService.deleteProfesseur(id)
    .then(() => {
      this.getProfesseurs();
    }, error => console.log(error));
  }
}