import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuoteService {

  constructor(public http: Http) {
    console.log('Hello QuoteService Provider');
  }
  getQuotes() {
    console.log("called getQuotes");
    var url = 'https://champquotes.isys4283.walton.uark.edu/api/quotes/';
    return this.http.get(url).map(res => res.json());
  }
}
