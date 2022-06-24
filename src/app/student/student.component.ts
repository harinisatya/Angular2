import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: ['./sample.component.css'],
})
export class StudentComponent {
  isDisabled: boolean = false;

  buttonClass: string = 'colorClass';

  columnSpan: number = 2;
  imagePath: string = 'Tom.png';
  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  gender: string = 'Male';
  age: string = '20';

  FullName: string = 'Isha';
  LastName: string = 'Satya';

  getFullName(): string {
    return this.FullName + '  ' + this.LastName;

    // interpolation with method
  }
}
