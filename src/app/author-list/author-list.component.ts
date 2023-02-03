import { authors, Author } from './../author.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-author-list',
  template: `
    <app-author-detail
      *ngFor="let author of authors"
      [author]="author"
      (authorSelected)="onAuthorSelected($event)"
    ></app-author-detail>
    <p>Author active is: {{ authorActive?.name }}</p>
  `,
})
export class AuthorListComponent {
  authors = authors;
  authorActive: Author | undefined = authors[0];

  onAuthorSelected(id: number) {
    this.authorActive = authors.find((author) => author.id == id);
  }
}
