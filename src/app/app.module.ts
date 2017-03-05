import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FlowerComponent }  from './flower.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FlowerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
