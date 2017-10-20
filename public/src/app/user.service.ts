import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(
      private _http: Http
  ) { }

  login(user) {
      return this._http.post('/users', user)
      .map((response: Response) => response.json())
      .toPromise();
  }

  getID() {
      return this._http.get('/users/one')
      .map((response: Response) => response.json())
      .toPromise();
  }

  logout() {
      return this._http.get('/users/logout')
      .map((response: Response) => response.json())
      .toPromise();
  }

}
