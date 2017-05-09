import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Customer } from '../../models/customer';

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
    this.customer.first_name = navParams.get('first_name');
    this.customer.last_name = navParams.get('last_name');
    this.customer.phone = navParams.get('phone');
    this.customer.email = navParams.get('email');
    this.customer.updated_at = navParams.get('updated_at');
    this.itemName = navParams.get('itemName');
    this.itemQuantity = navParams.get('itemQuantity');
    this.targetPrice = navParams.get('targetPrice');
    this.purchNotes = navParams.get('purchNotes');
    this.vendorNumber = navParams.get('vendorNumber');
    this.vendorName = navParams.get('vendorName');
    this.houseCost = navParams.get('houseCost');
    this.vendorNotes = navParams.get('vendorNotes');
    this.shipTime = navParams.get('shipTime');
    this.custPrice = navParams.get('custPrice');
    this.salesNotes = navParams.get('salesNotes');
    this.customer.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RfqFulfill');
  }
  navToRfqComplete() {
    this.navCtrl.push('rfq-complete', {
      itemName: this.itemName, vendorName: this.vendorName, vendorNumber: this.vendorNumber, shipTime: this.shipTime,
      custPrice: this.custPrice, salesNotes: this.salesNotes, first_name: this.customer.first_name, last_name: this.customer.last_name,
      phone: this.customer.phone, email: this.customer.email, updated_at: this.customer.updated_at,
      itemQuantity: this.itemQuantity, targetPrice: this.targetPrice, purchNotes: this.purchNotes,
      id: this.customer.id
    });
  }

}
