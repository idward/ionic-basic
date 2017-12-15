import {Component} from '@angular/core';
import {ActionSheetController, AlertController} from "ionic-angular";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController) {

  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [{
        text: 'Destructive',
        role: 'destructive',
        handler: () => {
          console.log('Destructive clicked!');
        }
      }, {
        text: 'Archive',
        handler: () => {
          console.log('Archive clicked!');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked!');
        }
      }]
    });

    actionSheet.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });

    alert.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked!', data);
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked!', data);
          }
        }
      ]
    });

    prompt.present();
  }

}
