import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTourPageRoutingModule } from './detail-tour-routing.module';

import { DetailTourPage } from './detail-tour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTourPageRoutingModule
  ],
  declarations: [DetailTourPage]
})
export class DetailTourPageModule {}
