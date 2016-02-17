import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'my-header',
  template: `
  Header from component
  `
})
class MyHeader {

}

@Component({
  selector: 'my-footer',
  template: `
  Footer from component
  `
})
class MyFooter {

}

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
