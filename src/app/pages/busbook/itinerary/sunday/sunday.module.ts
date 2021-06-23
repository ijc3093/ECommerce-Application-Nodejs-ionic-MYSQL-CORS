import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SundayPageRoutingModule } from './sunday-routing.module';

import { SundayPage } from './sunday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SundayPageRoutingModule
  ],
  declarations: [SundayPage]
})
export class SundayPageModule {}
