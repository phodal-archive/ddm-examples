import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {
  private http: any;

  constructor(http:Http) {
    this.http = http;
    this.getBlog();
  }


  getBlog() {
    this.http.get('http://localhost:12306/')
      .map(res => res.json())
      .subscribe(
        data => console.log(data),
        err => this.logError(err),
        () => console.log('Random Quote Complete')
      );
  }

  private logError(err:any) {
    console.log(err)
  }
}
