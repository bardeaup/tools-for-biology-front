import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {User} from "../model/models";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

 authenticated = false;


  // Attention revenir à l'utilisation du HTTP de base si ça ne fonctionne pas
  constructor(private http : HttpClient) { }

  login (user : User) {
    console.log("app.service");
    return this.http.post('/api/register', JSON.stringify({user})).pipe(
      map((response : Response) => {
      // login successful if there's a jwt token in the response
      let user = response.json();
    }));
  }


  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });

  }

}

