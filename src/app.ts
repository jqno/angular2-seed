import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'seed-app',
  template: `
  <div>
    <header>header</header>
    <main>content</main>
    <footer>footer</footer>
  </div>
  `
})
class SeedApp {

}

bootstrap(SeedApp, []);
