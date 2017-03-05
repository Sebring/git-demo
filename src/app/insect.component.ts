import { Component } from '@angular/core';

const INSECTS: Insect[] = [
  {name: 'Spider'},
  {name: 'wasp'},
];

export class Insect {
  name: String;
}

@Component({
  selector: 'insect-list',
  template: `<div class='insect-list'>
                <ul>
                    <li *ngFor="let item of insects">{{item.name}}</li>
                </ul>
            </div>`,
})
export class InsectComponent{
    insects = INSECTS;
}