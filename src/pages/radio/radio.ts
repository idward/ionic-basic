import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the RadioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {
  brightness: number;
  items:string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.brightness = 20;
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioPage');
  }

  initializeItems(){
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad'
    ];
  }

  rangeValueChange(evt: Event) {
    console.log('brigtness:', this.brightness);
  }

  getItems(evt:Event){
    this.initializeItems();

    let searchVal = evt.target['value'];

    if(searchVal.trim() !== ''){
      this.items = this.items.filter((item) => {
        return item.toLowerCase().indexOf(searchVal.trim().toLowerCase()) !== -1;
      });
    }
  }

}
