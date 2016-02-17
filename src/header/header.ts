import {Component} from 'angular2/core';
import {MyAvatar} from './avatar/avatar';

@Component({
  selector: 'my-header',
  directives: [
    MyAvatar
  ],
  template: `
  Header from component
  <my-avatar></my-avatar>
  `
})
export class MyHeader {

}

