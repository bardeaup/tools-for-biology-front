import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {LoggedUser} from "../model/models";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  actualUser : LoggedUser;

  constructor(private authService : AuthService) {
    this.authService.userUpdate$.subscribe(
      data => {
        this.actualUser = data;
      }
    )
  }

  logout(){
    console.log("appel de la fonction logout du header");
    this.authService.logout();
  }


}
