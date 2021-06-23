import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArbuysPageRoutingModule } from './arbuys-routing.module';

import { ArbuysPage } from './arbuys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArbuysPageRoutingModule
  ],
  declarations: [ArbuysPage]
})
export class ArbuysPageModule {}
