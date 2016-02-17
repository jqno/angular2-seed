import {Component, Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
class Service {
  constructor(private http: Http) {

  }
  
  getAvatar() {
    return this.http
        .get('/data.json')
        .map((res: Response) => res.json())
        .map((json: any) => json.data);
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
    this.service.getAvatar().subscribe((avatar: any) => {
      this.avatar = avatar;
    });
  }
}

