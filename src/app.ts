import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'my-header',
  template: `
  Header from component
  `
})
class Header {

}

@Component({
  selector: 'seed-app',
  directives: [
    Header
  ],
  template: `
  <div>
    <my-header>header</my-header>
    <main>content</main>
    <footer>footer</footer>
  </div>
  `
})
class SeedApp {

}

bootstrap(SeedApp, []);
