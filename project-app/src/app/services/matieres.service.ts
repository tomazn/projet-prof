import { Injectable } from '@angular/core';
import {Matiere} from '../model/matiere';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class MatieresService {

  constructor(private http: Http) { }

  GetMatieres(): Promise<Matiere[]> {
    return this.http.get('/api/getMatieres')
      .map(res => res.json())
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  addMatiere(matiere) {
    const formData: FormData = new FormData();
    formData.append('logo', matiere.logo);
    formData.append ('intitule', matiere.intitule);
    return this.http.post('/api/addMatiere', formData)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Erreur : ', error);
    return Promise.reject(error.message || error);
  }
}
