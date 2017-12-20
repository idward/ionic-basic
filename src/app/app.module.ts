import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {ItemDetailsPage} from '../pages/item-details/item-details';
import {ListPage} from '../pages/list/list';
import {ButtonsPage} from '../pages/buttons/buttons';
import {CardsPage} from '../pages/cards/cards';
import {InputsPage} from '../pages/inputs/inputs';
import {LoadingPage} from '../pages/loading/loading';
import {ModalPage} from '../pages/modal/modal';
import {ModalContentPage} from '../pages/modal-content/modal-content';
import {PopoverPage} from '../pages/popover/popover';
import {PopoverContentPage} from '../pages/popover-content/popover-content';
import {RadioPage} from "../pages/radio/radio";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ButtonsPage,
    CardsPage,
    InputsPage,
    LoadingPage,
    ModalPage,
    ModalContentPage,
    PopoverPage,
    PopoverContentPage,
    RadioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ButtonsPage,
    CardsPage,
    InputsPage,
    LoadingPage,
    ModalPage,
    ModalContentPage,
    PopoverPage,
    PopoverContentPage,
    RadioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
