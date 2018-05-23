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

  results : any;

  constructor(private http : HttpClient, private authService : AuthService,
              private router : Router) { }

  login (registerForm : User) {

  this.authService.authentication(registerForm)
    .subscribe(
      p => {
        console.log('login comp')
        this.authService.setUser();
        this.router.navigate(['/']);
      }
    );
  }





    // const currentUser = <User>registerForm;
    // console.log("login component");
    // this.authService.attemptAuth(currentUser).subscribe(
    //   (data) => {
    //
    //     this.token.saveToken(data.token);
    //     this.router.navigate(['/']);
    //   },
    //   (error) => {
    //     console.log("error lors du login : ", error);
    //   }
    // );



    // const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    // const body = new HttpParams()
    //   .set('username', currentUser.username)
    //   .set('password', currentUser.password);
    // console.log("User : ", body);
    //
    // this.http.post('/auth/login', body.toString(),{
    //   headers: new HttpHeaders()
    //     .set('Content-Type', 'application/x-www-form-urlencoded')
    // }).subscribe(result  => {
    //   // login successful if there's a jwt token in the response
    //   console.log("resultat: ", result);
    //   this.results = result;
    // });


}
