import {Component} from 'angular2/core';
import {MyAvatar} from './avatar/avatar';
import {TodoService} from '../todo/todo-service';

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
    (keyup.enter)="onEnter($event.target.value)"/>
  `
})
export class MyHeader {
  current = '';

  constructor(private todoService: TodoService) {
  }

  onEnter(value) {
    this.todoService.todos.push(value);
    this.current = '';
  }
}

