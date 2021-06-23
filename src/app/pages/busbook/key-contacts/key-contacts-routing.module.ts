import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyContactsPage } from './key-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: KeyContactsPage
  },
  {
    path: 'hilton',
    loadChildren: () => import('./hilton/hilton.module').then( m => m.HiltonPageModule)
  },
  {
    path: 'dunkin-donuts',
    loadChildren: () => import('./dunkin-donuts/dunkin-donuts.module').then( m => m.DunkinDonutsPageModule)
  },
  {
    path: 'arbuys',
    loadChildren: () => import('./arbuys/arbuys.module').then( m => m.ArbuysPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeyContactsPageRoutingModule {}
