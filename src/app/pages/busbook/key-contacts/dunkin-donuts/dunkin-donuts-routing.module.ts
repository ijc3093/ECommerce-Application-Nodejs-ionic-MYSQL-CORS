import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DunkinDonutsPage } from './dunkin-donuts.page';

const routes: Routes = [
  {
    path: '',
    component: DunkinDonutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DunkinDonutsPageRoutingModule {}
