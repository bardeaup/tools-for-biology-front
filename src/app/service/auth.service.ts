import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {User, LoggedUser} from "../model/models";
import { map } from 'rxjs/operators';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class AuthService {

  actualUser : LoggedUser = { username : null , isLogged : false};
  userUpdate = new Subject<LoggedUser>();
  userUpdate$ = this.userUpdate.asObservable();

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {
  }

  authentication(currentUser: User): Observable<any> {

    const body = new HttpParams()
      .set('username', currentUser.username)
      .set('password', currentUser.password);
    return this.http.post('/auth/login', body.toString(), {
      observe: 'response', responseType: 'text',
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
    }).pipe(map(this.jwtInSessionStorage));

  }

  private jwtInSessionStorage(response: HttpResponse<any>) {

    // login successful if there's a jwt token in the response
    let token = response.headers.get('Authorization');
    let refresh = response.headers.get('refresh');


    if (token) {
      // set token property
      token = token.replace('Bearer ', '');
      sessionStorage.setItem('token', token);
    }
    if (refresh) {
      // set token property
      refresh = refresh.replace('Bearer ', '');
      sessionStorage.setItem('refresh_token', refresh);
    }

  }

  logout(): void {
    // clear token remove user from local storage to log user out
    console.log("logouuuououout");
    sessionStorage.removeItem('token');
  }

  setUser(){
    let username;
    if(sessionStorage.getItem('token') != null){
      username = this.jwtHelper.decodeToken().sub;
    }
    this.actualUser = { username : username , isLogged : sessionStorage.getItem('token') != null};
    this.userUpdate.next(this.actualUser);
  }
}
