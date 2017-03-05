import { Component } from '@angular/core';

const FLOWERS: Flower[] = [
  {name: 'Rose'},
  {name: 'tulip'},
  {name: 'gerbera'},
];

export class Flower {
  name: String;
}

@Component({
  selector: 'flower-list',
  template: `<div class='flower-list'>
                <ul>
                    <li *ngFor="let item of flowers">{{item.name}}</li>
                </ul>
            </div>`,
})
export class FlowerComponent{
    flowers = FLOWERS;
}