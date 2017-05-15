import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeAppointment } from './make-appointment';

@NgModule({
  declarations: [
    MakeAppointment,
  ],
  imports: [
    IonicPageModule.forChild(MakeAppointment),
  ],
  exports: [
    MakeAppointment
  ]
})
export class MakeAppointmentModule {}
