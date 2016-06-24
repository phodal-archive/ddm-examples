import {Component} from '@angular/core';
import {Http} from '@angular/http';
import * as DDM from 'ddm';

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
    this.http.get('http://localhost:3030/blog.json')
      .map(res => res.json())
      .subscribe(
        data => this.convert(data),
        err => this.logError(err),
        () => console.log('Random Quote Complete')
      );
  }

  private logError(err:any) {
    console.log(err)
  }

  private convert(data:any) {
    var SEOBlog = {};
    var ddm = new DDM();
    ddm.get(['title', 'blog', 'author'])
      .from(data)
      .remove('title')
      .to(SEOBlog);
    console.log(SEOBlog);
  }
}
