import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  tab1:any;
  tab2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = Tab1ContentPage;
    this.tab2 = Tab2ContentPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}

@Component({
  template:`    
    <ion-content>
      <h2>Tab1 Content Page</h2>
    </ion-content>
  `
})
export class Tab1ContentPage {
  constructor(){}
}

@Component({
  template:`    
    <ion-content>
      <h2>Tab2 Content Page</h2>
    </ion-content>
  `
})
export class Tab2ContentPage {
  constructor(){}
}

