import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiltonPage } from './hilton.page';

const routes: Routes = [
  {
    path: '',
    component: HiltonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiltonPageRoutingModule {}
