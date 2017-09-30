import { Component } from '@angular/core';

@Component({
  selector: 'page-404',
  template: `
    <div class='center'>
      <h1>404 NOT FOUND</h1>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/" class="">
        Retourner sur la page d'accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }
