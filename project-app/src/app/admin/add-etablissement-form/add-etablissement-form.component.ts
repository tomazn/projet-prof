import { Component, OnInit, Inject, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

import { EtablissementsService} from '../../services/etablissements.service';

@Component({
  selector: 'app-add-etablissement-form',
  templateUrl: './add-etablissement-form.component.html',
  styleUrls: ['./add-etablissement-form.component.css']
})
export class AddEtablissementFormComponent implements OnInit {

  form: FormGroup;
  @Output() EtablissementAdded = new EventEmitter<boolean>();


  constructor(@Inject(FormBuilder) fb: FormBuilder, private _EtablissementService: EtablissementsService) {
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

  get cp() { return this.form.get('cp'); }

  submit(value, validate): void {
    if (!validate) { return; }
    this._EtablissementService.addEtablissement(value)
      .then( () => {
        this.EtablissementAdded.emit(true);
          this.form.reset();
      })
      .catch(err => console.log(err));
  }
}
