import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PollService } from '../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private name: String;
    private polls: Array<any>;
    private deletedPollID;
    private displaypolls: Array<any>;
    private input = {
        key: ''
    };

    constructor(
        private _us: UserService,
        private _router: Router,
        private _ps: PollService
    ) { }

    ngOnInit() {
        this.getID();
        this.displayPolls();
    }

    getID() {
        this._us.getID()
        .then(data => this.name = data.name)
        .catch(err => {
            console.warn(err);
            this._router.navigateByUrl('/');
        });
    }

    logout() {
        this._us.logout()
        .then(data => this._router.navigateByUrl('/'))
        .catch(err => console.warn(err));
    }

    displayPolls() {
        this._ps.displayPolls()
        .then(data => {
            this.polls = data;
            this.displaypolls = data;
        })
        .catch(err => console.warn(err));
    }

    searchPolls() {
        console.log(this.input.key);
        this.displaypolls = this.polls.filter(poll => {
            return poll.question.toLowerCase().includes(this.input.key.toLowerCase());
        });
    }

}

