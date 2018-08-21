import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { professeur } from '../../model/professeur';
import { Etablissement } from '../../model/etablissement';
import { Matiere } from '../../model/matiere';
import { EtablissementsService } from '../../services/etablissements.service';
import { MatieresService } from '../../services/matieres.service';
import { ProfesseursService } from '../../services/professeurs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-professeur-form',
  templateUrl: './add-professeur-form.component.html',
  styleUrls: ['./add-professeur-form.component.css']
})
export class AddProfesseurFormComponent implements OnInit {

  form: FormGroup;
  etablissements: Etablissement[];
  matieres: Matiere[];
  Edit: boolean;
  id: String;

  promiseEtablissement: Promise<void>;
  promiseMatiere: Promise<void>;

  constructor(private fb: FormBuilder, private EtablissementsService: EtablissementsService,
    private MatieresService: MatieresService, private professeursService: ProfesseursService, private ActivatedRoute: ActivatedRoute, private Router: Router) { }

  ngOnInit() {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    if (this.id) {
      this.Edit = true;
    } else {
      this.Edit = false;
    }
    this.initEtablissements();
    this.initMatieres();
    this.createForm();
  }

  createForm(): void {
    Promise.all([this.promiseEtablissement, this.promiseMatiere])
      .then(res => {
        if (this.Edit) {
          this.professeursService.getProfesseur(this.id)
            .then(res => {
              this.buildForm(res);
            }, error => console.log(error))
        } else {
          this.buildForm(new professeur());
        }
      })
  }

  initEtablissements(): void {
    this.promiseEtablissement = this.EtablissementsService.GetEtablissements()
      .then(res => {
        this.etablissements = res;
      },
        error => console.log(error)
      );
  }

  initMatieres(): void {
    this.promiseMatiere = this.MatieresService.GetMatieres()
      .then(res => {
        this.matieres = res;
      },
        error => console.log(error)
      )
  }

  buildForm(professeur: professeur): void {
    this.form = this.fb.group({
      nom: [professeur.nom ? professeur.nom : '', Validators.required],
      prenom: [professeur.prenom ? professeur.prenom : '', Validators.required],
      etablissement: [professeur.etablissement ? professeur.etablissement : '', Validators.required],
      matiere: [professeur.matiere ? professeur.matiere : '', Validators.required]
    })
  }

  submit(value, validate): void {
    if (!validate) { return; }
    if (this.Edit) {
      this.professeursService.editProfesseur(this.id, value)
        .then(() => {
          this.Router.navigate(['/Admin/Professeurs']);
        },
          error => console.log(error))
    } else {
      this.professeursService.addProfesseur(value)
        .then(() => {
          //this.Router.navigate['/Admin/Professeurs'];
        },
          error => console.log(error))
    }
  }
}
