import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  IsDisabled: boolean = false; //  property value for property binding

  onClick(): void {
    alert('HelloWorld'); // method for event binding
  }
  text: string = 'bold';
  isBold: boolean = true;

  fname: string = 'Harini';
  lname: string = 'Nannuta';

  imageurl: string = 'https://bit.ly/bg-saint';
  //  image url for interpolation to display images

  numbe1: number = 100;
  numbe2: number = 200;

  getFullName(): string {
    return this.fname + ' ' + this.lname;
    // interpolation with method
  }
}
