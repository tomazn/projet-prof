import { Component, OnInit, Inject, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Etablissement} from '../../model/etablissement';

import { EtablissementsService} from '../../services/etablissements.service';

@Component({
  selector: 'app-add-etablissement-form',
  templateUrl: './add-etablissement-form.component.html',
  styleUrls: ['./add-etablissement-form.component.css']
})
export class AddEtablissementFormComponent implements OnInit {


  Etablissement: Etablissement;
  Edit: boolean;
  form: FormGroup;
  id: String;
  @Output() EtablissementAdded = new EventEmitter<boolean>();


  constructor(private fb: FormBuilder, private _EtablissementService: EtablissementsService, private Route: ActivatedRoute, private Router: Router) {}

  ngOnInit() {
    this.Edit = false;
    if (this.Route.snapshot.params['id']) {
      const id = this.Route.snapshot.params['id'];
      this.id = id;
      this._EtablissementService.GetEtablissement(id).then(
        data => this.buildForm(data),
        error => console.log(error)
      );
      this.Edit = true;
    } else {
      this.buildForm(new Etablissement());
    }
  }

  get cp() { return this.form.get('cp'); }

  submit(value, validate): void {
    if (!validate) { return; }
    if (this.Edit) {
      this._EtablissementService.editEtablissement(this.id, value)
        .then(() => {
          this.Router.navigate(['/Admin/Etablissements']);
        })
        .catch(err => console.log(err));
    } else {
      this._EtablissementService.addEtablissement(value)
        .then( () => {
          this.EtablissementAdded.emit(true);
          this.form.reset();
        })
        .catch(err => console.log(err));
    }
  }

  buildForm(Etablissement): void {
    this.form = this.fb.group({
      name: [Etablissement ? Etablissement.name : '', Validators.compose([Validators.required, Validators.minLength(3)]) ],
      type: [Etablissement ? Etablissement.type : '', Validators.required],
      adresse: [Etablissement ? Etablissement.adresse : '', Validators.compose([Validators.required, Validators.minLength(3)]) ],
      cp: [Etablissement ? Etablissement.cp : '', Validators.compose([
        Validators.required, Validators.minLength(5),
        Validators.maxLength(5),
        Validators.pattern('^(0|[1-9][0-9]*)$')
      ]) ]
    });
  }
}
