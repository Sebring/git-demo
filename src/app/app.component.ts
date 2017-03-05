import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <flower-list></flower-list>
  <insect-list></insect-list>`,
})
export class AppComponent  { 
  name = 'Teknomedia';
}
