import {Component, Input} from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
  selector: 'todo-list',
  inputs: ['todos'],
  template: `
  <div>
    <ul>
      <li *ngFor="#todo of todos">
        {{ todo }}
      </li>
    </ul>
  </div>
  `
})
export class TodoList {
  @Input() todos = [];

  current = '';

  constructor(private todoService: TodoService) {
  }
}

