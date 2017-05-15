import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Signup} from '../pages/signup/signup';
import {Userpage} from '../pages/userpage/userpage';
import { MakeAppointment } from '../pages/make-appointment/make-appointment';
import {AuthService} from '../pages/home/authservice';
import{ Appointments } from '../providers/appointments';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Signup,
    Userpage,
    MakeAppointment
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Signup,
    Userpage,
    MakeAppointment
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    Appointments
  ]
})
export class AppModule {}
