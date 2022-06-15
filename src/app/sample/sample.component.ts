import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: ` Hey <input [(ngModel)]='name'>
  <br>
  You entered text {{name}}
  `,
})
export class SampleComponent {
  name: string = '';
}
