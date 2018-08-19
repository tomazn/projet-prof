import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { professeur } from '../model/professeur';

@Injectable()
export class ProfesseursService {

constructor(private http: Http){}

addProfesseur(professeur) {
  return this.http.post('/api/addProfesseur', professeur )
    .toPromise()
    .then()
    .catch(this.handleError);
}

getProfesseurs(): Promise<professeur> {
  return this.http.get('/api/getProfesseurs')
  .map(res => res.json())
  .toPromise()
  .then()
  .catch(this.handleError);
}

deleteProfesseur(id: String){
  return this.http.delete('/api/deleteProfesseur/' + id)
      .toPromise()
      .then()
      .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('Erreur : ', error);
  return Promise.reject(error.message || error);
}
}