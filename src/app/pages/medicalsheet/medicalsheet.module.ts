import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalsheetPageRoutingModule } from './medicalsheet-routing.module';

import { MedicalsheetPage } from './medicalsheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalsheetPageRoutingModule
  ],
  declarations: [MedicalsheetPage]
})
export class MedicalsheetPageModule {}
