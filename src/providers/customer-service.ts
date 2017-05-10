import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CustomerService {
  constructor(public http: Http) {
    console.log('Hello CustomerService Provider');
  }

  getCustomer(id) {
    console.log("called getCustomer");
    var url = 'https://champquotes.isys4283.walton.uark.edu/api/customers/' + id;
    return this.http.get(url).map(res => res.json());
  }
  getMyCustomer() {
    console.log("called getMyCustomer");
    var url = 'https://champquotes.isys4283.walton.uark.edu/api/customers/';
    return this.http.get(url).map(res => res.json());
  }
}
