import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'seed-app',
  template: 'hello'
})
class SeedApp {

}

bootstrap(SeedApp, []);
