import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {FORM_PROVIDERS, FORM_DIRECTIVES} from 'angular2/common';

import {MyHeader} from './header/header';
import {MyFooter} from './footer/footer';
import {TodoList} from './todo/todo';
import {TodoService} from './todo/todo-service';

@Component({
  selector: 'seed-app',
  directives: [
    MyHeader,
    MyFooter,
    TodoList,
    FORM_DIRECTIVES
  ],
  template: `
  <div>
    <my-header></my-header>
    <main>
      <todo-list [todos]="todoService.todos"></todo-list>
    </main>
    <my-footer></my-footer>
  </div>
  `
})
class SeedApp {
  constructor(private todoService: TodoService) {
  }
}

bootstrap(SeedApp, [
  TodoService,
  FORM_PROVIDERS,
  HTTP_PROVIDERS
]);
