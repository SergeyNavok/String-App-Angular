import { FieldComponent } from './field/field.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineComponent } from './line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    LineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
