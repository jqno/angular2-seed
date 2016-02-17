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
  `
})
export class MyAvatar {
  constructor(public service: Service) {
  }
}

