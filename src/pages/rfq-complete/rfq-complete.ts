import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Customer } from '../../models/customer';

/**
 * Generated class for the RfqComplete page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'rfq-complete',
})
@Component({
  selector: 'page-rfq-complete',
  templateUrl: 'rfq-complete.html',
})
export class RfqComplete {
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
  targetPrice;
  purchNotes;
  customer: Customer = {
    first_name: "",
    last_name: "",
    id: "",
    updated_at: "",
    phone: "",
    email: "",
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bizName = navParams.get('bizName');
    this.custName = navParams.get('custName');
    this.cityName = navParams.get('cityName');
    this.stateName = navParams.get('stateName');
    this.zipCode = navParams.get('zipCode');
    this.vendorNumber = navParams.get('vendorNumber');
    this.vendorName = navParams.get('vendorName');
    this.houseCost = navParams.get('houseCost');
    this.vendorNotes = navParams.get('vendorNotes');
    this.shipTime = navParams.get('shipTime');
    this.custPrice = navParams.get('custPrice');
    this.salesNotes = navParams.get('salesNotes');
    this.customer.first_name = navParams.get('first_name');
    this.customer.last_name = navParams.get('last_name');
    this.customer.phone = navParams.get('phone');
    this.customer.email = navParams.get('email');
    this.customer.updated_at = navParams.get('updated_at');
    this.itemName = navParams.get('itemName');
    this.itemQuantity = navParams.get('itemQuantity');
    this.targetPrice = navParams.get('targetPrice');
    this.purchNotes = navParams.get('purchNotes');
    this.customer.id = navParams.get('id');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RfqComplete');
  }

}
