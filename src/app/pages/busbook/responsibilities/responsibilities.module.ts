import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResponsibilitiesPageRoutingModule } from './responsibilities-routing.module';

import { ResponsibilitiesPage } from './responsibilities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResponsibilitiesPageRoutingModule
  ],
  declarations: [ResponsibilitiesPage]
})
export class ResponsibilitiesPageModule {}
