import { Component, OnInit, OnDestroy } from '@angular/core';
import { PollService } from '../poll.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit, OnDestroy {

    private name;
    private subscription;
    private options;
    private pollid;
    private poll: Object;
    private voteoption;

    constructor(
        private _ps: PollService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _us: UserService
    ) { }

    ngOnInit() {
        this.getID();

        this.subscription = this._route.paramMap
        .switchMap(params => this.pollid = params.get('id'))
        .subscribe();

        this.getOptions();
        this.getPoll();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    // Unsubscribing

    getOptions() {
        this._ps.getOptions(this.pollid)
        .then(options => this.options = options)
        .catch(err => console.log(err));
    }

    getPoll() {
        this._ps.getPoll(this.pollid)
        .then(poll => this.poll = poll)
        .catch(err => console.warn(err));
    }

    vote() {
        this._ps.vote(this.voteoption)
        .then(data => {
            console.log(data);
            this.getOptions();
        })
        .catch(err => console.warn(err));
    }

    getID() {
        this._us.getID()
        .then(data => this.name = data.name)
        .catch(err => {
            console.warn(err);
            this._router.navigateByUrl('/');
        });
    }

    getOption(id) {
        this._ps.getOption(id)
        .then(data => {
            this.voteoption = data;
            return this.vote();
        })
        .catch(err => console.log(err));
    }

}
