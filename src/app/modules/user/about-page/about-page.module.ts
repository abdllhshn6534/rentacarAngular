import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { BestOffersComponent } from './component/best-offers/best-offers.component';
import { TeamComponent } from './component/team/team.component';
import { WhatWeDoComponent } from './component/what-we-do/what-we-do.component';
import { WhoWeAreComponent } from './component/who-we-are/who-we-are.component';
import { AboutHomeComponent } from './component/about-home/about-home.component';


@NgModule({
  declarations: [
    BestOffersComponent,
    TeamComponent,
    WhatWeDoComponent,
    WhoWeAreComponent,
    AboutHomeComponent
  ],
  imports: [
    CommonModule,
    AboutPageRoutingModule
  ]
})
export class AboutPageModule { }
