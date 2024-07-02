import { Component } from '@angular/core';
import { GestionRecruesService } from '../services/gestion-recrues.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-recrues',
  templateUrl: './recrues.component.html',
  styleUrl: './recrues.component.css',
})
export class RecruesComponent {
  tabRecrues: Candidat[] = [];
  constructor(private recService: GestionRecruesService) {}

  ngOnInit() {
    this.tabRecrues = this.recService.getAllRecrues();
  }
}
