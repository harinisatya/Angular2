import { Component, VERSION } from '@angular/core';
import { data } from './data';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'hello-world',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];

  IsDisabled: boolean = false; //  property value for property binding

  // PageHeader: string = null;

  // imagePath: string = 'http://pragimtech.com/images/logo.jpg';

  onClick(): void {
    alert('HelloWorld'); // method for event binding
  }
  text: string = 'bold';
  isBold: boolean = true;

  fname: string = 'Harini';
  lname: string = 'Nannuta';

  firstname: string = 'Isha';
  lastname: string = 'Nannuta';

  imageurl: string = 'https://bit.ly/bg-saint';
  //  image url for interpolation to display images

  numbe1: number = 100;
  numbe2: number = 200;

  getFullName(): string {
    return this.fname + ' ' + this.lname;
    // interpolation with method
  }

  // Variables in Style Binding
  title = 'Style Binding';
  greeting = 'text color is red';
  color = 'red';
  bgColor = 'green';
  // Method to evaluate Style Binding
  updateColor() {
    this.color = 'blue';
    this.greeting = 'Hey! Text color is changed.';
  }
  // Object to evaluate ngStyle directive
  titleStyles = {
    fontStyle: 'italic',
    fontWeight: 'bold',
  };
  userStyles = {
    fontSize: '50px',
    backgroundColor: 'Grey',
  };
  name: string = '';
}
