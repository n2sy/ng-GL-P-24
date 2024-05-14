import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  prenom = 'Nidhal';
  nom = 'Jelassi';
  cl = 'green';
  hd = true;

  clickHandler() {
    alert("J'ai été cliqué");
  }

  traitement(contenuDuMessage) {
    this.prenom = contenuDuMessage;
  }
}
