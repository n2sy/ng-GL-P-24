import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionRecruesService {
  private tabRecrues: Candidat[] = [];

  getAllRecrues() {
    return this.tabRecrues;
  }

  addRecrue(newRecrue) {
    if (this.tabRecrues.indexOf(newRecrue) == -1)
      this.tabRecrues.push(newRecrue);
    else alert('Ce candidat a déjà été recruté');
  }
  constructor() {}
}
