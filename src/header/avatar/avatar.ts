import {Component, Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

@Injectable()
class Service {
  constructor(private http: Http) {

  }
  
  getAvatar() {
    return this.http.get('/data.json');
  }
}

@Component({
  selector: 'my-avatar',
  providers: [
    Service
  ],
  template: `
    {{ avatar }}

    <button (click)="onClick()">Click me</button>
  `
})
export class MyAvatar {
  avatar = '';

  constructor(private service: Service) {
  }

  onClick() {
    var url = '/data.json';
    this.service.getAvatar().subscribe((res: Response) => {
      var json = res.json();
      this.avatar = json.data;
    });
  }
}

