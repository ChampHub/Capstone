import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CustomerService } from '../../providers/customer-service';
import { Customer } from '../../models/customer';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@IonicPage({
  name: 'rfq-history',
})
@Component({
  selector: 'page-rfq-history',
  templateUrl: 'rfq-history.html',
})
export class RfqHistory implements OnInit {
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
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public customerService: CustomerService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RfqHistory');
  }
  navToRFQSearch() {
    this.navCtrl.push('rfq-search', );



  }
  ngOnInit() {
    this.customerService.getQuotes(this.id).subscribe(
      data => {
        console.log("data returned");
        this.customer = data;
        console.log(data);
      });
  }
}



