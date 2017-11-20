/**
 * Created by pascalbardeau on 13/11/2017.
 */

import {Component} from "@angular/core";

@Component({
  selector : 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

  submitted = false;

  onSubmit() { this.submitted = true; }
}
