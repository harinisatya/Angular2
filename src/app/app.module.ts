import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { TestsampleComponent } from './testsample/testsample/testsample.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SampleComponent, TestsampleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
