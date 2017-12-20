import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PopoverContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover-content',
  templateUrl: 'popover-content.html',
})
export class PopoverContentPage {
  background: string;
  contentEle: any;
  textEle: any;
  fontFamily: any;
  colors: object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.colors = {
      'white': {
        'bg': 'rgb(255, 255, 255)',
        'fg': 'rgb(0, 0, 0)'
      },
      'tan': {
        'bg': 'rgb(249, 241, 228)',
        'fg': 'rgb(0, 0, 0)'
      },
      'grey': {
        'bg': 'rgb(76, 75, 80)',
        'fg': 'rgb(255, 255, 255)'
      },
      'black': {
        'bg': 'rgb(0, 0, 0)',
        'fg': 'rgb(255, 255, 255)'
      }
    };
  }

  ngOnInit(){
    if(this.navParams.data){
      this.contentEle = this.navParams.data.contentEle;
      this.textEle = this.navParams.data.textEle;

      this.background = this.getColorName(this.contentEle.style.backgroundColor);
      this.setFontFamily();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverContentPage');
  }

  getColorName(background: string) {
    let colorName = 'white';

    if (!background) return 'white';

    for (let key in this.colors) {
      if (this.colors[key].bg == background) {
        colorName = key;
      }
    }

    return colorName;
  }

  setFontFamily() {
    if (this.textEle.style.fontFamily) {
      this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, '');
    }
  }

  changeBackground(color){
    this.background = color;
    this.contentEle.style.backgroundColor = this.colors[color].bg;
    this.textEle.style.color = this.colors[color].fg;
  }

  changeFontSize(direction){
    this.textEle.style.fontSize = direction;
  }

  changeFontFamily(){
    if(this.fontFamily){
      this.textEle.style.fontFamily = this.fontFamily;
    }
  }

}
