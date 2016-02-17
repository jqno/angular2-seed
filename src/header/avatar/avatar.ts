import {Component, Injectable} from 'angular2/core';

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
    {{ value }}
  `
})
export class MyAvatar {
  value = 'my value'
  constructor(public service: Service) {
  }
}

