import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {MatieresService} from '../../services/matieres.service';

@Component({
  selector: 'app-add-matiere-form',
  templateUrl: './add-matiere-form.component.html',
  styleUrls: ['./add-matiere-form.component.css']
})
export class AddMatiereFormComponent implements OnInit {

  form: FormGroup;
  file2Upload: File;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private _MatieresService: MatieresService) {
    this.form = fb.group({
      intitule: ['', Validators.required],
      logo: ['']
    });
  }

  ngOnInit() {
  }

  onFileChange($event) {
    this.file2Upload = $event.target.files[0];
  }

  submit(value, validate): void {
    value.logo = this.file2Upload;
   this._MatieresService.addMatiere(value)
     .then( () => {
        console.log('ajouté');
       })
     .catch(err => console.log(err));
  }
}
