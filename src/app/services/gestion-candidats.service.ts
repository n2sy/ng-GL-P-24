import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private tab: Candidat[] = [
    new Candidat(1, 'Homer', 'Simpson', 30, 'ingénieur', 'homer.png'),
    new Candidat(2, 'bart', 'Simpson', 23, 'cloud', 'bart.jpeg'),
    new Candidat(3, 'lisa', 'Simpson', 27, 'designer', 'lisa.png'),
  ];
  constructor() {}

  getAllCandidats() {
    return this.tab;
  }

  getCandidatById(id) {
    return this.tab.find((cand) => cand._id == id);
  }

  addCandidat() {
    this.tab.push(
      new Candidat(3, 'NEW', 'CANDIDAT', 27, 'designer', 'lisa.png')
    );
  }

  afficherSalut() {
    console.log('Je suis le service');
  }
}
