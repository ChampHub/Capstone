import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(public http: Http) {
    console.log('Hello ProductService Provider');
  }
   getProducts(){
    console.log("called getProducts");
    var url = 'https://champquotes.isys4283.walton.uark.edu/api/products/';
    return this.http.get(url).map(res => res.json());
  }

}
