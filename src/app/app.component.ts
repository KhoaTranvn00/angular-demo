import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('inputE', { static: false }) inputEl: ElementRef<HTMLInputElement>;
  name = '';
  isCheck = false;
  ngOnInit() {
    alert(123);
    console.log(this.inputEl);
    this.inputEl.nativeElement.focus();
  }

  AfterViewInit() {
    console.log(this.inputEl);
    this.inputEl.nativeElement.focus();
  }
}
