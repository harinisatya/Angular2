import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testsample',
  templateUrl: './testsample.component.html',
  styleUrls: ['./testsample.component.css'],
})
export class TestsampleComponent {
  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;

  addStyles() {
    let styles = {
      'fontsize.px': this.fontSize,
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
    };
    return styles;
  }
}
