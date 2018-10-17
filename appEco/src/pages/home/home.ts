import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListenPage } from '../listen/listen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToListen(params){
    if (!params) params = {};
    this.navCtrl.push(ListenPage);
  }
}
