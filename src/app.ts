import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

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
  ],
  styles: [`
    .bg-red {
      background-color: red;
    }
  `],
  template: `
  <div>
    <my-header (newTodo)="onNewTodo($event)"></my-header>
    <main class="bg-red">
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
  HTTP_PROVIDERS
]);
