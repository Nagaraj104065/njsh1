import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbstractItme } from '../../structures/available';

@IonicPage()
@Component({
  selector: 'page-availables',
  templateUrl: 'availables.html',
})
export class AvailablesPage {
 
  title: string = '';
  items: AbstractItme[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailablesPage');
  }

  getDatas(items, title){
       this.items = items;
       this.title = title;
  }

  

}
