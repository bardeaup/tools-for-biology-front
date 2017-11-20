import { Component, OnInit } from '@angular/core';

import { User } from '../model/models'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  register(registerForm : any){
    if(registerForm.password != registerForm.confirm_password){
      return false
    }
    let user = new User(registerForm.username,registerForm.email,registerForm.password ,registerForm.confirm_password);
    console.log(user);
    return true;
  }


}
