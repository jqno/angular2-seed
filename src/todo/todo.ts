import {Component, Injectable} from 'angular2/core';

@Injectable()
class TodoService {
  todos = [
    'first value'
  ];
}

@Component({
  selector: 'todo',
  providers: [
    TodoService
  ],
  template: `
  <div>
    <input type="text"
      [(ngModel)]="current"
      (keyup.enter)="onEnter($event.target.value)"/>
    <ul>
      <li *ngFor="#todo of todoService.todos">
        {{ todo }}
      </li>
    </ul>
  </div>
  `
})
export class Todo {
  current = '';
  constructor(private todoService: TodoService) {
  }

  onEnter(value) {
    this.todoService.todos.push(value);
    this.current = '';
  }
}

