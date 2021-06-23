import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvanceCrewCheckListPage } from './advance-crew-check-list.page';

const routes: Routes = [
  {
    path: '',
    component: AdvanceCrewCheckListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvanceCrewCheckListPageRoutingModule {}
