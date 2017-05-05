import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { Storage } from '@ionic/storage';
import { CustomerService } from '../../providers/customer-service';

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
  customers: any;
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private http: Http,
    public customerService: CustomerService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RfqSubmit');
  }

  navToRfqFulfill(myRfq: string) {
    this.navCtrl.push('rfq-fulfill', {
      id: 5678, bizName: this.bizName, custName: this.custName,
      cityName: this.cityName, stateName: this.stateName,
    });
  }

  getCustomerNumber() {
    console.log("changed");
    this.customerService.getCustomer().subscribe(
      data => {
        this.customers = data;
        console.log(data);
      });
  }

  printRadioValue() {
    console.log(this.custType);
  }
}

