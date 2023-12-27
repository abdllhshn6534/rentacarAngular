import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./layout/component/main/main.component";
import {VehiclesDetailsPageComponent} from "./modules/user/vehicles-details-page/vehicles-details-page.component";

const routes: Routes = [{
  path: '', component: MainComponent,
  children: [
    {
      path: '', loadChildren: () =>
        import('./modules/user/home-page/home-page.module').then(m => m.HomePageModule)
    },
    {
      path:'vehicles',loadChildren:()=>
        import('./modules/user/vehicles-page/vehicles-page.module').then(m=> m.VehiclesPageModule)
    },
    {
      path:'about',loadChildren:()=>
        import('./modules/user/about-page/about-page.module').then(m => m.AboutPageModule)
    },
    {
      path:'contact',loadChildren:()=>
        import('./modules/user/contact-page/contact-page.module').then(m => m.ContactPageModule)
    },
    {
      path:'vehicles/:id',component:VehiclesDetailsPageComponent
    }
  ]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
