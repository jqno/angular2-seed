import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {MyHeader} from './header/header';
import {MyFooter} from './footer/footer';
import {TodoList} from './todo/todo';

@Component({
  selector: 'seed-app',
  directives: [
    MyHeader,
    MyFooter,
    TodoList
  ],
  template: `
  <div>
    <my-header></my-header>
    <main>
      <todo-list></todo-list>
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
