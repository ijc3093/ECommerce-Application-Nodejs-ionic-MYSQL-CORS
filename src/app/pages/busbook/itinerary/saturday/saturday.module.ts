import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaturdayPageRoutingModule } from './saturday-routing.module';

import { SaturdayPage } from './saturday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaturdayPageRoutingModule
  ],
  declarations: [SaturdayPage]
})
export class SaturdayPageModule {}
