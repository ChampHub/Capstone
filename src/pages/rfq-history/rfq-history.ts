import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';

import { CustomerService } from '../../providers/customer-service';
import { QuoteService } from '../../providers/quote-service';
import { ProductService } from '../../providers/product-service'
import { Customer } from '../../models/customer';
import { Product } from '../../models/product';
import { Quote } from '../../models/quote';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@IonicPage({
  name: 'rfq-history',
})
@Component({
  selector: 'page-rfq-history',
  templateUrl: 'rfq-history.html',
  providers: [
    CustomerService,
    QuoteService,
    ProductService
  ]
})
export class RfqHistory implements OnInit {
  custType = "customerNumber";
  customerNumber;
  quotes: any;
  id: any;
  products: any;
  myArray = [];
  customer: Customer = {
    first_name: "",
    last_name: "",
    id: "",
    updated_at: "",
    phone: "",
    email: "",
  };
  quote: Quote = {
    id: "",
    price: "",
    customer_id: "",
    updated_at: "",
    product_id: "",
  };
  product: Product = {
    id: "",
    name: "",
    description: "",
    updated_at: "",
    image: "",
  };
  customers;
  



  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public quoteService: QuoteService,
    public customerService: CustomerService, public productService: ProductService) {
    this.customer.phone = navParams.get('phone');
    this.customer.email = navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RfqHistory');
  }

  navToRFQSearch() {
    this.navCtrl.push('rfq-search', );
  }

  ngOnInit() {
    console.log('ngOnInit');
    //Observable.forkjoin
    this.quoteService.getQuotes().subscribe(
      data => {
        console.log("data returned");
        this.quotes = data;
        console.log(data)
      });
    this.customerService.getMyCustomer().subscribe(
      data => {
        console.log("data returned");
        this.customers = data;
        console.log(data)
      });
    this.productService.getProducts().subscribe(
      data => {
        console.log("data returned");
        this.products = data;
        console.log(data)
      });
  };
}



