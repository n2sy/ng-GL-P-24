import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defaultLanguage = 'js';
  myComment = 'Rien à signaler...';
  submitHandler(f) {
    console.log(f);
  }
}
