import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservationPage } from './reservation.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ReservationPageRoutingModule } from './reservation-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ReservationPage }]),
    ReservationPageRoutingModule,
  ],
  declarations: [ReservationPage]
})
export class ReservationPageModule {}
