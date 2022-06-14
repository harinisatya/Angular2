import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, StudentComponent, SampleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
