import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusbookPageRoutingModule } from './busbook-routing.module';

import { BusbookPage } from './busbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusbookPageRoutingModule
  ],
  declarations: [BusbookPage]
})
export class BusbookPageModule {}
