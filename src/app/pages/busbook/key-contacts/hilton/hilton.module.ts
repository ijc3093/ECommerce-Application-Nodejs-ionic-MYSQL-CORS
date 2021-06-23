import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiltonPageRoutingModule } from './hilton-routing.module';

import { HiltonPage } from './hilton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiltonPageRoutingModule
  ],
  declarations: [HiltonPage]
})
export class HiltonPageModule {}
