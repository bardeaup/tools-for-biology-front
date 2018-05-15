import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    const refreshToken = sessionStorage.getItem('refresh_token');
    let clone: HttpRequest<any>;
    if (token) {
      // if (token.expired) {
      //   // renew token
      //   this.authService.refreshToken(refreshToken).subscribe(result => {
      //    sessionStorage.setItem('token',result.token);
      //   })
      // }

      clone = request.clone({
        headers: request.headers
          .set('Authorization', 'Bearer ${token}')
      });

    }

    else {

     clone = request.clone();

    }
    return next.handle(clone);
  }


  private addExtraHeaders(headers: HttpHeaders): HttpHeaders {
    headers = headers.append('myHeader', 'abcd');
    return headers;
  }
}
