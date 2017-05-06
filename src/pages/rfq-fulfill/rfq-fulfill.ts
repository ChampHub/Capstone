import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'rfq-fulfill',
})
@Component({
  selector: 'page-rfq-fulfill',
  templateUrl: 'rfq-fulfill.html',
})
export class RfqFulfill {
  bizName;
  custName;
  cityName;
  stateName;
  zipCode;
  vendorNumber;
  vendorName;
  houseCost;
  vendorNotes;
  shipTime;
  custPrice;
  salesNotes;
  itemName;
  itemQuantity;
  customer;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bizName = navParams.get('bizName');
    this.custName = navParams.get('custName');
    this.cityName = navParams.get('cityName');
    this.stateName = navParams.get('stateName');
    this.zipCode = navParams.get('zipCode');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RfqFulfill');
  }
  navToRfqComplete() {
    this.navCtrl.push('rfq-complete', {
      id: 9012, bizName: this.bizName, custName: this.custName, cityName: this.cityName, stateName: this.stateName, 
        zipCode: this.zipCode, itemName: this.itemName, vendorName: this.vendorName, shipTime: this.shipTime, 
        custPrice: this.custPrice, salesNotes: this.salesNotes
    });
  }

}
