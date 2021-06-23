import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DunkinDonutsPageRoutingModule } from './dunkin-donuts-routing.module';

import { DunkinDonutsPage } from './dunkin-donuts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DunkinDonutsPageRoutingModule
  ],
  declarations: [DunkinDonutsPage]
})
export class DunkinDonutsPageModule {}
