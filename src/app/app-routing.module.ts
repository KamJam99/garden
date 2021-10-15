import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { AboutPageComponent} from "./about-page/about-page.component";
import { StoreComponent } from "./store/store.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'store', component: StoreComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
