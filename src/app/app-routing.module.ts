import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:""
  },
  {
    component:AboutComponent,
    path:"about"
  },
  {
    component:ProductComponent,
    path:"product"
  },
  {
    component:ServiceComponent,
    path:"service"
  },
  {
    component:ContactComponent,
    path:"contact"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
