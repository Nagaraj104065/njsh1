import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AbstractThings } from '../../modal/things';
import { Datas } from '../../modal/datas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public _things: AbstractThings[];
  public get things(): AbstractThings[] {
    return this._things;
  }
  public set things(value: AbstractThings[]) {
    this._things = value;
  }
  
  constructor(public navCtrl: NavController) {
            this.things = Datas.THINGS;
  }

}
