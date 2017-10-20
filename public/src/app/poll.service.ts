import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class PollService {


  constructor(
      private _http: Http
  ) { }


  create(pollinfo) {
      return this._http.post('/polls', pollinfo)
      .map((response: Response) => response.json())
      .toPromise();
  }

  displayPolls() {
      return this._http.get('/polls')
      .map((response: Response) => response.json())
      .toPromise();
  }

  deletePoll(id) {
      return this._http.delete(`/polls/${id}`)
      .map((response: Response) => response.json())
      .toPromise();
  }

  getOptions(id) {
     return this._http.get(`/options/${id}`)
     .map((response: Response) => response.json())
     .toPromise();
  }

  getPoll(id) {
      return this._http.get(`/polls/${id}`)
      .map((response: Response) => response.json())
      .toPromise();
  }

  vote(id) {
      return this._http.put(`/options`, id)
      .map((response: Response) => response.json())
      .toPromise();
  }

  getOption(id) {
      return this._http.get(`/options/one/${id}`)
      .map((response: Response) => response.json())
      .toPromise();
  }

}
