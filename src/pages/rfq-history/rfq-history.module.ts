import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RfqHistory } from './rfq-history';
import { CustomerService } from '../../providers/customer-service';


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
    CustomerService
  ]
})
export class RfqHistoryModule {}
