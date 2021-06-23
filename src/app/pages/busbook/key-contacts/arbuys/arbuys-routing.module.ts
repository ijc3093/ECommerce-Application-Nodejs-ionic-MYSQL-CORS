import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbuysPage } from './arbuys.page';

const routes: Routes = [
  {
    path: '',
    component: ArbuysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbuysPageRoutingModule {}
