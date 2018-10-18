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

  playing : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public player: RadioPlayer, private app: App) {
    this.playing = false;
  }

  play() {
    this.player.play().then(() => {
      console.log('Playing');
    });

    this.playing = true;
  }

  pause() {
    this.player.pause();
    console.log('Pause')

    this.playing = false;
  }

  progress(){
    console.log('Progress');
    if( this.playing )
      this.player.progress();
    else
      return 0;
    }

  rootHome(event){
    if(!event) event = {};

    this.app.getRootNav().setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
  }
}

