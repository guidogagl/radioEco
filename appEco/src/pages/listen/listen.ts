import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, AlertController, App} from 'ionic-angular';
import { RadioPlayer } from '../../radio/radio';

import {TabsPage} from "../../tabs/tabs";

/**
 * Generated class for the Trymap page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-trymap',
  templateUrl: 'listen.html',
  providers: [RadioPlayer]
})
export class TrymapPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public player: RadioPlayer, private app: App) {

  }

  play() {
    this.player.play().then(() => {
      console.log('Playing');
    });
  }

  pause() {
    this.player.pause();
    console.log('Pause')
  }


  rootHome(event){
    if(!event) event = {};

    this.app.getRootNav().setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
  }
}

