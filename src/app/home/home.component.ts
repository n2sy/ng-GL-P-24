import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToCv() {
    this.router.navigateByUrl('/cv');
  }

  goToServers() {
    this.router.navigate(['servers']);
  }
}
