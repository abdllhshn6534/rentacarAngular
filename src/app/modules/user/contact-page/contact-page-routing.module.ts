import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactHomeComponent} from "./component/contact-home/contact-home.component";

const routes: Routes = [
  {path:'',component:ContactHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactPageRoutingModule { }
