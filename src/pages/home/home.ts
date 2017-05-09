import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navToRFQForm() {
    // go to the MyPage component
    this.navCtrl.push('rfq-submit');
  }
  navToRFQHistory() {
    this.navCtrl.push('rfq-history')
  }
}
