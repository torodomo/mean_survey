import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { PollService } from '../../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    private polls;
    private name;

    constructor(
        private _ps: PollService,
        private _router: Router,
        private _us: UserService
    ) { }

    @Input() set displaypolls(newpolls){
        this.polls = newpolls;
    }

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

    deletePoll(id) {
        this._ps.deletePoll(id)
        .then(data => this._router.navigateByUrl('/dashboard'))
        .catch((err) => console.warn(err));
        this._ps.displayPolls()
        .then(data => {
            this.polls = data;
            this.displaypolls = data;
        })
        .catch(err => console.warn(err));
    }
}
