import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailablesPage } from './availables';

@NgModule({
  declarations: [
    AvailablesPage,
  ],
  imports: [
    IonicPageModule.forChild(AvailablesPage),
  ],
})
export class AvailablesPageModule {}
