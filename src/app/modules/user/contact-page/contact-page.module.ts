import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactInfoComponent } from './component/contact-info/contact-info.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { ContactHomeComponent } from './component/contact-home/contact-home.component';


@NgModule({
  declarations: [
    ContactInfoComponent,
    ContactFormComponent,
    ContactHomeComponent
  ],
  imports: [
    CommonModule,
    ContactPageRoutingModule
  ]
})
export class ContactPageModule { }
