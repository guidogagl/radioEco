import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PalinsestoPage } from '../pages/palinsesto/palinsesto';
import { TrymapPage } from '../pages/listen/listen';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from "../tabs/tabs";

import { NativeAudio } from "@ionic-native/native-audio";
import { Geolocation} from "@ionic-native/geolocation";
import { Diagnostic} from "@ionic-native/diagnostic";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    LoginPage,
    SignupPage,
    PalinsestoPage,
    TrymapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    LoginPage,
    SignupPage,
    PalinsestoPage,
    TrymapPage
  ],
  providers: [
    Diagnostic,
    Geolocation,
    StatusBar,
    SplashScreen,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
