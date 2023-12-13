import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTourPage } from './detail-tour.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTourPageRoutingModule {}
