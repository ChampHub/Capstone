import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { Storage } from '@ionic/storage';
import { CustomerService } from '../../providers/customer-service';
import { Customer } from '../../models/customer';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@IonicPage({
  name: 'rfq-submit',


})

@Component({
  selector: 'page-rfq-submit',
  templateUrl: 'rfq-submit.html',
  providers: [
    CustomerService
  ]
})
export class RfqSubmit {
  bizName;
  custName;
  cityName;
  stateName;
  zipCode;
  itemName;
  itemQuantity;
  targetPrice;
  purchNotes;
  myArray = [];
  custType = "customerNumber";
  customerNumber;
  customer: Customer={
  first_name:"",
  last_name:"",
    id:"",
    updated_at:"",
    phone:"",
    email:"",
  }
  ;
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private http: Http,
    public customerService: CustomerService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RfqSubmit');
  }

  navToRfqFulfill(myRfq: string) {
    this.navCtrl.push('rfq-fulfill', {
     first_name: this.customer.first_name, last_name: this.customer.last_name,
      phone: this.customer.phone, email: this.customer.email, updated_at: this.customer.updated_at,
      itemName: this.itemName, itemQuantity: this.itemQuantity, targetPrice: this.targetPrice, purchNotes: this.purchNotes, 
      id: this.customer.id,
    });
  }

  getCustomerNumber() {
    console.log("changed");
    this.customerService.getCustomer(this.id).subscribe(
      data => {
        console.log("data returned");
        this.customer = data;
        console.log(data);
      });
  }

  printRadioValue() {
    console.log(this.custType);
  }
}

