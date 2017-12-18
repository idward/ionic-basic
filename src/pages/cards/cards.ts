import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {
  tap:number;
  press:number;
  swipe:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tap = 0;
    this.press = 0;
    this.swipe = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

  tapEvent(evt:Event){
    this.tap++;
  }

  pressEvent(evt:Event){
    this.press++;
  }

  swipeEvent(evt:Event){
    this.swipe++;
  }

}
