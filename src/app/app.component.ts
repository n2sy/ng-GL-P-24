import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'GL-P-24';
  age;

  traitement(msg) {
    alert(msg);
  }
}
