import { Component, inject } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [];
  selectedCandidat: Candidat;

  //constructor(private candService: GestionCandidatsService) {}
  candService = inject(GestionCandidatsService);

  ngOnInit() {
    this.candService.afficherSalut();
    this.tabCandidats = this.candService.getAllCandidats();
  }

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }

  showCandidats() {
    console.log(this.candService.getAllCandidats());
  }

  addNewCandidat() {
    this.candService.addCandidat();
  }
}
