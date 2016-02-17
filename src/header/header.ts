import {Component, EventEmitter, Output} from 'angular2/core';
import {MyAvatar} from './avatar/avatar';

@Component({
  selector: 'my-header',
  directives: [
    MyAvatar
  ],
  template: `
  Header from component
  <my-avatar></my-avatar>
  <input type="text"
    [(ngModel)]="current"
    (keyup.enter)="onEnter()"/>
  `
})
export class MyHeader {
  @Output() newTodo = new EventEmitter();

  current = '';

  onEnter() {
    var value = this.current;
    this.current = '';
    this.newTodo.emit(value);
  }
}

