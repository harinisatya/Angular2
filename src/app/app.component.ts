import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: string = 'ScoriaIT';
}
