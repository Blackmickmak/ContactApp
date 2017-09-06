import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> <br>
  <contact-app></contact-app>
`,
})
export class AppComponent  { name = 'Angular'; }
