import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InputsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html',
})
export class InputsPage {
  items:string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      'Pokémon Yellow',
      'Super Metroid',
      'Mega Man X',
      'The Legend of Zelda',
      'Pac-Man'
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputsPage');
  }

}
