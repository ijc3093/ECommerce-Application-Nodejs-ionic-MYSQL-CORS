import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvanceCrewCheckListPageRoutingModule } from './advance-crew-check-list-routing.module';

import { AdvanceCrewCheckListPage } from './advance-crew-check-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvanceCrewCheckListPageRoutingModule
  ],
  declarations: [AdvanceCrewCheckListPage]
})
export class AdvanceCrewCheckListPageModule {}
