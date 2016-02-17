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
  selector: 'my-footer',
  template: `
  Footer from component
  `
})
class Footer {

}

@Component({
  selector: 'seed-app',
  directives: [
    Header,
    Footer
  ],
  template: `
  <div>
    <my-header>header</my-header>
    <main>content</main>
    <my-footer>footer</my-footer>
  </div>
  `
})
class SeedApp {

}

bootstrap(SeedApp, []);
