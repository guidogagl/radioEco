import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from "ionic-angular";
import { TrymapPage } from '../listen/listen';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private app: App) {
  }
  goToListen(params){
    if (!params) params = {};
   // this.navCtrl.push(TrymapPage);
    this.app.getRootNav().setRoot(TrymapPage, {}, {animate: true, direction: 'forward'});
  }
}
