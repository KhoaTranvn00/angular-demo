import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
    <div (click)="checkChange.emit(!this.check)">
      {{ check }}
    </div>
  `,
})
export class ToggleComponent {
  @Input() check: boolean;
  @Output() checkChange = new EventEmitter<boolean>();

  handleToggle = () => {
    // this.check = !this.check;
    this.checkChange.emit(!this.check);
  };
}
