import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class EtablissementsService {
  constructor(private http: Http) {

  }

  GetEtablissements(): Promise<any> {
    return this.http.get('/api/getEtablissements')
      .map(res => res.json())
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Erreur : ', error);
    return Promise.reject(error.message || error);
  }
}
