import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input({ required: true }) myColor = 'yellow';

  @Output() msgToParent = new EventEmitter<string>();
  sendHandler() {
    this.msgToParent.emit('Message de la part du Child Component');
  }
}
