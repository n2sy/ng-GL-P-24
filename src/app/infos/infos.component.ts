import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  idValue;
  candidatAafficher: Candidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private candSer: GestionCandidatsService
  ) {}

  ngOnInit() {
    //1ere méthode
    // this.idValue = this.activatedRoute.snapshot.paramMap.get('id');

    //2éeme méthode
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        setTimeout(() => {
          this.candidatAafficher = this.candSer.getCandidatById(p.get('id'));
          if (!this.candidatAafficher) {
            this.router.navigateByUrl('/not-found');
          }
        }, 3000);
      },
    });
  }
}
