import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RfqSubmit } from './rfq-submit';
import { CustomerService } from '../../providers/customer-service';

@NgModule({
  declarations: [
    RfqSubmit,
  ],
 
  imports: [
    IonicPageModule.forChild(RfqSubmit),

  ],
  exports: [
    RfqSubmit
  ],
  providers: [
    CustomerService
  ]
})
export class RfqSubmitModule {}
