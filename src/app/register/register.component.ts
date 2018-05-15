import { Component, OnInit } from '@angular/core';

import { User } from '../model/models'
import { Headers } from "@angular/http";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  results: string[];
  constructor(private http : HttpClient) { }

  login (registerForm : any) {

    const currentUser = <User>registerForm;

    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const body = new HttpParams()
      .set('username', currentUser.username)
      .set('password', currentUser.password);

    this.http.post('/auth/login', body.toString(),{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).subscribe(result  => {
        // login successful if there's a jwt token in the response
      console.log("resultat: ", result);
      this.results = null;
    });
  }
}
