import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {MyHeader} from './header/header';
import {MyFooter} from './footer/footer';

@Injectable()
class TodoService {

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
      <li *ngFor="#todo of todos">
        {{ todo }}
      </li>
    </ul>
  </div>
  `
})
class Todo {
  current = '';
  todos = [
    'first value'
  ];

  constructor(private todoService: TodoService) {
  }

  onEnter(value) {
    this.todos.push(value);
    this.current = '';
  }
}

@Component({
  selector: 'seed-app',
  directives: [
    MyHeader,
    MyFooter,
    Todo
  ],
  template: `
  <div>
    <my-header></my-header>
    <main>
      <todo></todo>
    </main>
    <my-footer></my-footer>
  </div>
  `
})
class SeedApp {

}

bootstrap(SeedApp, [
  HTTP_PROVIDERS
]);
