import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Etablissement} from '../model/etablissement';

@Injectable()
export class EtablissementService {
  constructor(private http: Http) {

  }

  addEtablissement(etablissement) {
    console.log(etablissement);
     return this.http.post('/api/addEtablissement', etablissement )
       .toPromise()
       .then()
       .catch(this.handleError);
  }

  GetEtablissement(id): Promise<Etablissement> {
    return this.http.get('/api/getEtablissement/' + id)
      .map(res => res.json())
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  DeleteEtablissement(id) {
    return this.http.delete('/api/deleteEtablissement/' + id)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Erreur : ', error);
    return Promise.reject(error.message || error);
  }
}
