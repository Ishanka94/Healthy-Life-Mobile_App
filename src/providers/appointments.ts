import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Appointments provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Appointments {

  constructor(public http: Http) {
    
  }

  createAppointmet(appointment){
  	var creds = "speciality=" + appointment.speciality + "&date=" + appointment.date + "&time=" + appointment.time;
  	var headers = new Headers();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded');

  	// return new Promise
  	// this.http.post('http://localhost:3333/makeAppointment', JSON.stringify(appointment), {headers: headers})
  	// 	.subscribe(res => {
  	// 		console.log(res.json);
  	// 	});
  	return new Promise(resolve => {
            this.http.post('http://localhost:3333/makeAppointment', creds, {headers: headers}).subscribe(data => {
                if(data.json().success){
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
  	
  }

}
