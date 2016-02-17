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

    <button on-click="onClick()">Click me</button>
  `
})
export class MyAvatar {
  constructor(
    private service: Service,
    private http: Http) {
  }

  onClick() {
    console.log('I have been clicked');
  }
}

