import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.css']
})
export class FabButtonComponent {
  @Input() iconName: string;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  clickButton() {
    this.buttonClicked.emit();
  }

}
