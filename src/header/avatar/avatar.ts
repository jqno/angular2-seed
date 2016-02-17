import {Component, Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

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
    {{ avatar }}

    <button (click)="onClick()">Click me</button>
  `
})
export class MyAvatar {
  avatar = '';

  constructor(
    private service: Service,
    private http: Http) {
  }

  onClick() {
    var url = '/data.json';
    this.http.get(url).subscribe((res: Response) => {
      var json = res.json();
      this.avatar = json.data;
    });
  }
}

