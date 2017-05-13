import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CustomerService } from './customer-service';
import { QuoteService } from './quote-service';
import { ProductService } from './product-service'

import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { Quote } from '../models/quote';

import 'rxjs/add/observable/forkJoin';

@Injectable()
export class QuoteHistoryService {
  customers: any;
  products: any;
  quotes: any;

  constructor(public http: Http,
    public customerService: CustomerService,
    public quoteService: QuoteService,
    public productService: ProductService) {
    console.log('Hello QuoteHistoryService Provider');
  }
  getQuotes(){
    return Observable.forkJoin(
        this.customerService.getMyCustomer(),
        this.quoteService.getQuotes(),
        this.productService.getProducts(),
    ).map(
      data => {
        console.log("Successful return");
        this.customers = data[0]
        this.quotes = data[1]
        this.products = data[2]
        return this.joinData(this.customers, this.quotes, this.products);
      },
      err => console.error(err)
    );
  }

  joinData(customers, quotes, products) {
    console.log('joinData');
    for (let i = 0; i < quotes.length; i++) {
      let quote = quotes[i];
      let customer = customers.find(customer => customer.id === quote.customer_id);
      let product = products.find(product => product.id === quote.product_id);
      quote["customer"] = customer;
      quote["product"] = product;

      //console.log(quote); 
    }
    return quotes;
  }
}
