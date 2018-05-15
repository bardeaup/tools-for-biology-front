import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public jwtHelper: JwtHelperService) {}

  ngOnInit() {
    console.log('Pascal is token exired',this.jwtHelper.isTokenExpired()); // true or false
    console.log('Pascal token exired date',this.jwtHelper.getTokenExpirationDate());
    console.log('pascal decode tokent',this.jwtHelper.decodeToken()); // token
  }

}
