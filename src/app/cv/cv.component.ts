import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'Homer', 'Simpson', 30, 'ingénieur', 'homer.png'),
    new Candidat(2, 'bart', 'Simpson', 23, 'cloud', 'bart.jpeg'),
    new Candidat(3, 'lisa', 'Simpson', 27, 'designer', 'lisa.png'),
  ];
  selectedCandidat: Candidat;

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
