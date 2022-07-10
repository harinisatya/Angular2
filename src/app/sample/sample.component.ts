import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  // ***** Code for Class Binding *****
  
  classesToApply: string = 'colorClass italicClass sizeClass';
  applyColorClass: boolean = true; // toggle value by placing !
  applyItalicClass: boolean = true;
  applySizeClass: boolean = true;
  addClasses() {
    let classes = {
      colorClass: this.applyColorClass,
      italicClass: this.applyItalicClass,
      sizeClass: this.applySizeClass,
    };
    return classes;
  }
}
