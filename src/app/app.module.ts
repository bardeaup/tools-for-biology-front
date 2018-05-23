import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule, EmailValidator} from '@angular/forms';


import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {MaterialModule} from "./material.service";
import {HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {AppService} from "./service/app.service";
import {HttpModule} from "@angular/http";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import {AppRouter} from "./app.routing";
import {AuthService} from "./service/auth.service";
import {TokenStorage} from "./service/token.storage";
import {Interceptor} from "./service/app.interceptor";
import {JwtModule} from "@auth0/angular-jwt";
import { HeaderComponent } from './header/header.component';

export function tokenGetter() {
  return sessionStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRouter,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:9000']
      }
    })
  ],
  exports: [
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    EmailValidator
  ],
  providers: [AppService, AuthService, TokenStorage],
  // , { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
bootstrap: [AppComponent]
})



export class AppModule {
}

