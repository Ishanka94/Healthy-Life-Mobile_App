import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MakeAppointment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-make-appointment',
  templateUrl: 'make-appointment.html',
})
export class MakeAppointment {

	speciality: any;
	date: any;
	time: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MakeAppointment');
  // }

  save(): void{
  	let appointment = {
  		speciality: this.speciality,
  		date: this.date,
  		time: this.time
  	}

  	this.viewCtrl.dismiss(appointment);
  }

  close(): void{
  	this.viewCtrl.dismiss();
  }

}
