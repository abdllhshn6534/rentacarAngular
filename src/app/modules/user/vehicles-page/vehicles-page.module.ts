import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesPageRoutingModule } from './vehicles-page-routing.module';
import { VehiclesComponent } from './component/vehicles/vehicles.component';
import { VehiclesCardComponent } from './component/vehicles-card/vehicles-card.component';


@NgModule({
  declarations: [
    VehiclesComponent,
    VehiclesCardComponent
  ],
  imports: [
    CommonModule,
    VehiclesPageRoutingModule
  ]
})
export class VehiclesPageModule { }
