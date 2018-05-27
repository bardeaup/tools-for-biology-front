///<reference path="../service/token.storage.ts"/>
/**
 * Created by pascalbardeau on 13/11/2017.
 */

import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {User, LoggedUser} from "../model/models";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector : 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

  constructor(private http : HttpClient, private authService : AuthService,
              private router : Router) { }

  login (registerForm : User) {

  this.authService.authentication(registerForm)
    .subscribe(
      p => {
        this.authService.setUser();
        this.router.navigate(['/proliferation']);
      }
    );
  }
}
