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
      (keyup.enter)="onInput($event.target.value)"/>
    <ul>
      <li *ngFor="var todo of todos">
        {{ todo }}
      </li>
    </ul>
  </div>
  `
})
class Todo {
  todos = [
    'first value'
  ];

  constructor(private todoService: TodoService) {
  }

  onInput(value) {
    var newTodos = [
      ...this.todos,
      value
    ];
    this.todos = newTodos
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
