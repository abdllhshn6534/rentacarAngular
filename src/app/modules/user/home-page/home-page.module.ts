import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SliderComponent } from './component/slider/slider.component';
import { PopularCarsComponent } from './component/popular-cars/popular-cars.component';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    SliderComponent,
    PopularCarsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
