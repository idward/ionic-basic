import {Component, ViewChild} from '@angular/core';

import {Platform, MenuController, Nav} from 'ionic-angular';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ButtonsPage} from "../pages/buttons/buttons";
import {CardsPage} from "../pages/cards/cards";
import {InputsPage} from "../pages/inputs/inputs";
import {LoadingPage} from "../pages/loading/loading";
import {ModalPage} from "../pages/modal/modal";
import {PopoverPage} from "../pages/popover/popover";
import {RadioPage} from "../pages/radio/radio";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public menu: MenuController,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      {title: 'Hello Ionic', component: HelloIonicPage},
      {title: 'My First List', component: ListPage},
      {title: 'My Popover', component: PopoverPage},
      {title: 'My Radio', component: RadioPage}
    ];
  }

  // {title: 'My Buttons', component: ButtonsPage},
  // {title: 'My Cards', component: CardsPage},
  // {title: 'My Inputs', component: InputsPage},
  // {title: 'My Loading', component: LoadingPage},
  // {title: 'My Modal', component: ModalPage},

  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit....');
  //   this.nav.push(LoadingPage);
  // }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('initial app status....');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
