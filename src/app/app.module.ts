import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule,
  MatToolbarModule,MatFormFieldModule, MatMenuModule} from '@angular/material';

import {LoginComponent} from '../login/login.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
