import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

import {MyHeader} from './header/header';
import {MyFooter} from './footer/footer';

@Component({
  selector: 'seed-app',
  directives: [
    MyHeader,
    MyFooter
  ],
  template: `
  <div>
    <my-header></my-header>
    <main>content</main>
    <my-footer></my-footer>
  </div>
  `
})
class SeedApp {

}

bootstrap(SeedApp, []);
