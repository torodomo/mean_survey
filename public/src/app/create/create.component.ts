import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PollService } from '../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private newpoll = {
    question: '',
    creator: '',
    optionone: '',
    optiontwo: '',
    optionthree: '',
    optionfour: '',
  };

  private name: string;

  constructor(
    private _us: UserService,
    private _ps: PollService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getID();
  }

  getID() {
    this._us.getID()
    .then(data => this.name = data.name)
    .catch(err => {
        console.warn(err);
        this._router.navigateByUrl('/');
    });
  }

  create() {
    this.newpoll.creator = this.name;
    this._ps.create(this.newpoll)
    .then(data => {
        this._router.navigateByUrl('/dashboard');
    })
    .catch(err => console.warn(err));
  }

}
