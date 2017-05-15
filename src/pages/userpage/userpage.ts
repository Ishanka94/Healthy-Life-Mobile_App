import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import {AuthService} from '../home/authservice';
import { MakeAppointment } from '../make-appointment/make-appointment';
import { Appointments } from '../../providers/appointments';

import {HomePage} from '../home/home';

/**
 * Generated class for the Userpage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html',
})
export class Userpage {

  appointments_list: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthService, public alertCtrl: AlertController, public modalCtrl: ModalController, public appointService: Appointments) {
  }

  ionViewDidLoad() {
    console.log('hello Userpage page');
  }

  logout() {
        this.authservice.logout();
        this.navCtrl.setRoot(HomePage);
   }

   getinfo() {

        this.authservice.getinfo().then((data: any) => {
        if(data.success) {
            var alert = this.alertCtrl.create({
                title: data.success,
                subTitle: data.msg,
                buttons: ['ok']
            });
            alert.present();
        }
            
    })                                   
	}

  makeAppointment(){
    let modal = this.modalCtrl.create(MakeAppointment);
    modal.onDidDismiss(appointment => {
      if (appointment) {
        this.appointments_list.push(appointment);
        this.appointService.createAppointmet(appointment);
      }
    });

    modal.present();
  }

}
