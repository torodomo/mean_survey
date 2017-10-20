import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private user = {
            name: ''
        };

    private myerr;

    constructor(
        private _us: UserService,
        private _router: Router
    ) { }

    ngOnInit() {
    }

    login() {
        this._us.login(this.user)
        .then(data => {
            console.log(data);
            this._router.navigateByUrl('/dashboard');
        })
        .catch(err => this.myerr = err);
    }

}

