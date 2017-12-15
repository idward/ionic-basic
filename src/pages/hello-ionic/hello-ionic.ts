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

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked!');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked!');
          }
        }
      ]
    });

    confirm.present();
  }

  showRadio() {
    let radio = this.alertCtrl.create({
      title: 'Lightsaber color',
      inputs: [
        {
          type: 'radio',
          label: 'Blue',
          value: 'blue',
          checked: true
        },
        {
          type: 'radio',
          label: 'Red',
          value: 'red',
          checked: false
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel Clicked!', data);
          }
        },
        {
          text: 'OK',
          handler: data => {
            console.log('OK Clicked!', data);
          }
        }
      ]
    });

    radio.present();
  }

  showRadio1() {
    let radio = this.alertCtrl.create();
    radio.setTitle('Lightsaber color');
    radio.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true,
    });
    radio.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red',
      checked: false,
    });
    radio.addButton('Cancel');
    radio.addButton({
      text: 'OK',
      handler: data => {
        console.log('OK Clicked', data);
      }
    });

    radio.present();
  }

  showCheckbox() {
    let checkbox = this.alertCtrl.create({
      title: 'Which planets have you visited?',
      inputs: [
        {
          type: 'checkbox',
          label: 'Alderaan',
          value: 'value1',
          checked: true
        },
        {
          type: 'checkbox',
          label: 'Bespin',
          value: 'value2',
          checked: false
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel Clicked!', data);
          }
        },
        {
          text: 'Okay',
          handler: data => {
            console.log('Checkbox data:', data);
          }
        }
      ]
    });

    checkbox.present();
  }

}
