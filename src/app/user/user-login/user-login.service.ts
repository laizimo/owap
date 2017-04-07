///<reference path="../../../../node_modules/rxjs/add/operator/map.d.ts"/>
import {Injectable} from '@angular/core';

import {User} from '../model/user.model';
import {Http, Headers, RequestOptions , Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserLoginService {
  public userLoginUrl = 'src/mock-data/user-login-mock.json';
  public subject: Subject<User> = new Subject<User>();
  constructor(public http: Http) {}

  public get currentUser(): Observable<User>{
    return this.subject.asObservable();
  }

  public login(user: User) {
    return this.http.get(this.userLoginUrl)
      .map((response: Response) => {
        let user = response.json();
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.subject.next(Object.assign({}, user));
        }
        return response;
      })
      .subscribe(
        data => {
          console.log('login success>' + data);
        },
        error => {
          console.log(error);
        }
      );
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.subject.next(Object.assign({}));
  }
}
