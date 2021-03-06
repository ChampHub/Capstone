import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RfqHistory } from './rfq-history';
import { CustomerService } from '../../providers/customer-service';
import { ProductService } from '../../providers/product-service';
import { QuoteService } from '../../providers/quote-service';
import { QuoteHistoryService } from '../../providers/quote-history-service';


@NgModule({
  declarations: [
    RfqHistory,
  ],
  imports: [
    IonicPageModule.forChild(RfqHistory),
  ],
  exports: [
    RfqHistory
  ],
  providers: [
    CustomerService,
    ProductService,
    QuoteService,
    QuoteHistoryService
  ]
})
export class RfqHistoryModule {}
