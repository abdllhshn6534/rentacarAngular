import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './component/main/main.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterOutlet
    ],
  exports:[MainComponent]
})
export class LayoutModule { }
