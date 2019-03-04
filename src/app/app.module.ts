import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


import { AuthService } from "./services/auth.service";


export const firebaseConfig = {
  apiKey: "AIzaSyDJxzSvzWHJCywVbHWnxl20JcSa2iiM_qw",
  authDomain: "angularfirebaseauthproject.firebaseapp.com",
  databaseURL: "https://angularfirebaseauthproject.firebaseio.com",
  projectId: "angularfirebaseauthproject",
  storageBucket: "",
  messagingSenderId: "142997162845"
};

@NgModule({
  declarations: [AppComponent, UserLoginComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
