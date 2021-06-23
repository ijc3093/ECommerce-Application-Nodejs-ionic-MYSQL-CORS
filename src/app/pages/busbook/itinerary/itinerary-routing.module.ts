import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItineraryPage } from './itinerary.page';

const routes: Routes = [
  {
    path: '',
    component: ItineraryPage
  },
  {
    path: 'saturday',
    loadChildren: () => import('./saturday/saturday.module').then( m => m.SaturdayPageModule)
  },
  {
    path: 'sunday',
    loadChildren: () => import('./sunday/sunday.module').then( m => m.SundayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItineraryPageRoutingModule {}
