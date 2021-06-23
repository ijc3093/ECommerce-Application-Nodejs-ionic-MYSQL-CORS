import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusbookPage } from './busbook.page';

const routes: Routes = [
  {
    path: '',
    component: BusbookPage
  },
  {
    path: 'itinerary',
    loadChildren: () => import('./itinerary/itinerary.module').then( m => m.ItineraryPageModule)
  },
  {
    path: 'key-contacts',
    loadChildren: () => import('./key-contacts/key-contacts.module').then( m => m.KeyContactsPageModule)
  },
  {
    path: 'responsibilities',
    loadChildren: () => import('./responsibilities/responsibilities.module').then( m => m.ResponsibilitiesPageModule)
  },
  {
    path: 'advance-crew-check-list',
    loadChildren: () => import('./advance-crew-check-list/advance-crew-check-list.module').then( m => m.AdvanceCrewCheckListPageModule)
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusbookPageRoutingModule {}
