import {Component, Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
class Service {
  constructor() {

  }
  
  getAvatar() {
    return '[Avatar]';   
  }
}

@Component({
  selector: 'my-avatar',
  providers: [
    Service
  ],
  template: `
    {{ service.getAvatar() }}

    <button (click)="onClick()">Click me</button>
  `
})
export class MyAvatar {
  constructor(
    private service: Service,
    private http: Http) {
  }

  onClick() {
    var url = '/data.json';
    this.http.get(url).subscribe(res => {
      var json = res.json();
      console.log('json ', json);
    });
  }
}

