import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {
  constructor(http:Http) {
    
  }
}
