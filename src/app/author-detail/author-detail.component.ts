import { Author } from './../author.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-author-detail',
  template: `
    <div>
      {{ author.name }}
    </div>
    <button (click)="authorSelected.emit(author.id)">x</button>
  `,
})
export class AuthorDetailComponent {
  @Input() author!: Author;
  @Output() authorSelected = new EventEmitter<number>();
}
