import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> <br>
  <contact-app></contact-app>
<app-locate></app-locate>
Please upload a excel file here
<excelreader-app></excelreader-app>
`,
  styleUrls:['./app.component.css']
})
export class AppComponent  { name = 'Angular'; }
