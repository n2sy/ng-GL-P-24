import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrl: './direct.component.css',
})
export class DirectComponent {
  bgColor = 'green';
  txtColor = 'pink';
  class1 = false;
  class2 = false;
  class3 = false;

  activeC1() {
    this.class1 = !this.class1;
  }
  activeC2() {
    this.class2 = !this.class2;
  }
  activeC3() {
    this.class3 = !this.class3;
  }
}
