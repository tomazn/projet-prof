import { Component, OnInit } from '@angular/core';
import { professeur } from '../../model/professeur';
import { ActivatedRoute } from '@angular/router';
import { ProfesseursService } from '../../services/professeurs.service';

@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.css']
})
export class ProfesseurComponent implements OnInit {

  Professeur: professeur;

  constructor(private Route: ActivatedRoute, private ProfesseursService: ProfesseursService) { }

  ngOnInit() {
    const id =  this.Route.snapshot.params['id'];
    this.ProfesseursService.getProfesseur(id).then(
      data => this.Professeur = data,
      error => console.log(error),
    );
  }

}
