import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FlowerComponent }  from './flower.component';
import { InsectComponent }  from './insect.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FlowerComponent, InsectComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
