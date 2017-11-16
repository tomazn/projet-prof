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
  file2Upload: File = null;
  @Output() MatiereAdded = new EventEmitter<boolean>();

  constructor(@Inject(FormBuilder) fb: FormBuilder, private _MatieresService: MatieresService) {
    this.form = fb.group({
      intitule: ['', Validators.required],
      logo: ['']
    });
  }

  ngOnInit() {
  }

  get intitule() { return this.form.get('intitule'); }

  onFileChange($event) {
    this.file2Upload = $event.target.files[0];
  }

  submit(value): void {
    if (!this.intitule || !this.file2Upload) { return; }
    value.logo = this.file2Upload;
   this._MatieresService.AddMatiere(value)
     .then( () => {
       this.MatiereAdded.emit(true);
        this.form.reset();
       })
     .catch(err => console.log(err));
  }
}
