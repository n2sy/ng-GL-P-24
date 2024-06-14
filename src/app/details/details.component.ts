import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCandidat: Candidat;
  afficherRecruterBn = false;

  constructor(private recService: GestionRecruesService) {}

  addNewRecrue() {
    this.recService.addRecrue(this.selCandidat);
    this.afficherRecruterBn = !this.afficherRecruterBn;
  }
}
