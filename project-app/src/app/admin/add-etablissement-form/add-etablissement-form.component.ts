import { Component, OnInit, Inject, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { EtablissementService} from '../../services/etablissement.service';
import {EtablissementsService} from '../../services/etablissements.service';

import { Etablissement } from '../../model/etablissement';

@Component({
  selector: 'app-add-etablissement-form',
  templateUrl: './add-etablissement-form.component.html',
  styleUrls: ['./add-etablissement-form.component.css']
})
export class AddEtablissementFormComponent implements OnInit {

  form: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private _EtablissementService: EtablissementService, private _EtablissementsService: EtablissementsService) {
    this.form = fb.group({
      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)]) ],
      type: ['', Validators.required],
      adresse: ['', Validators.compose([Validators.required, Validators.minLength(3)]) ],
      cp: ['', Validators.compose([
        Validators.required, Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern('^(0|[1-9][0-9]*)$')
      ]) ]
    });
  }

  ngOnInit() {
  }

  submit(value, validate): void {
    if (!validate) { return; }
    this._EtablissementService.addEtablissement(value)
      .then( () => {
        this._EtablissementsService.GetEtablissements()
          .then( );
      })
      .catch(err => console.log(err));
  }


}
