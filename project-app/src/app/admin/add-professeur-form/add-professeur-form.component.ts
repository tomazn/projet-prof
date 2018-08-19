import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { professeur } from '../../model/professeur';
import { Etablissement } from '../../model/etablissement';
import { Matiere } from '../../model/matiere';
import { EtablissementsService } from '../../services/etablissements.service';
import { MatieresService } from '../../services/matieres.service';
import { ProfesseursService } from '../../services/professeurs.service';

@Component({
  selector: 'app-add-professeur-form',
  templateUrl: './add-professeur-form.component.html',
  styleUrls: ['./add-professeur-form.component.css']
})
export class AddProfesseurFormComponent implements OnInit {

form: FormGroup;
etablissements: Etablissement[];
matieres: Matiere[];

promiseEtablissement: Promise<void>;
promiseMatiere: Promise<void>;

  constructor(private fb: FormBuilder, private EtablissementsService: EtablissementsService, 
    private MatieresService: MatieresService, private professeursService: ProfesseursService) { }

  ngOnInit() {
    this.initEtablissements();
    this.initMatieres();
    Promise.all([this.promiseEtablissement, this.promiseMatiere])
    .then( res => {
      this.buildForm(new professeur());
    })
  }

  initEtablissements(): void{
    this.promiseEtablissement = this.EtablissementsService.GetEtablissements()
    .then(res => {
        this.etablissements = res;
    },
    error => console.log(error)
  );
  }

  initMatieres(): void{
    this.promiseMatiere = this.MatieresService.GetMatieres()
    .then( res => {
      this.matieres = res;
    },
    error => console.log(error)
  )
  }

  buildForm(professeur: professeur): void{
    this.form = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      etablissement: ['', Validators.required],
      matiere: ['', Validators.required]
    })
  }

  submit(value, validate): void{
    if (!validate) { return; }
      this.professeursService.addProfesseur(value)
      .then(res => {
        console.log(res)
      },
    error => console.log(error))
    }
}
