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
    <input type="text" [value]="defaultTodo"/>
    <pre>this.defaultTodo = {{ defaultTodo }}</pre>
  </div>
  `
})
class Todo {
  defaultTodo = 'Default todo'
  constructor(private todoService: TodoService) {

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
