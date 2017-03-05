import { Component } from '@angular/core';

const FLOWERS : Flower[] = [
  {name: 'rose'}, 
  {name: 'tulip'}
];

export class Flower {
  name: String;
}

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <div *ngFor="let flower of flowers">{{flower.name}}</div>`,
})
export class AppComponent  { 
  name = 'Teknomedia';
  flowers = FLOWERS;
}
