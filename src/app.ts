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
      [value]="value"
      (input)="onInput($event.target.value)"/>
    <pre>this.defaultTodo = {{ defaultTodo }}</pre>
    <pre>this.value = {{ value }}</pre>
  </div>
  `
})
class Todo {
  defaultTodo = 'Default todo';
  value = this.defaultTodo;

  constructor(private todoService: TodoService) {
  }

  onInput(value) {
    this.value = value;
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
