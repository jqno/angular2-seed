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
    FORM_DIRECTIVES,
    MyHeader,
    MyFooter,
    TodoList,
  ],
  template: `
  <div>
    <my-header (newTodo)="onNewTodo($event)"></my-header>
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

  onNewTodo(value) {
    this.todoService.todos.push(value);
  }
}

bootstrap(SeedApp, [
  TodoService,
  FORM_PROVIDERS,
  HTTP_PROVIDERS
]);
