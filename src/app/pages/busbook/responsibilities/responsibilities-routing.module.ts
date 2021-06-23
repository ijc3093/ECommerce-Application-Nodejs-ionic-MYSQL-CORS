import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResponsibilitiesPage } from './responsibilities.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsibilitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsibilitiesPageRoutingModule {}
