/**
 * Created by pascalbardeau on 20/11/2017.
 */

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {ProliferationComponent} from "./proliferation/proliferation.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'proliferation', component: ProliferationComponent },
  { path: '', component: HomeComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const AppRouter = RouterModule.forRoot(appRoutes);
