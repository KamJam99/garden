import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StoreComponent } from './store/store.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { StoreChildComponent } from './store-child/store-child.component';
import { CartChildComponent } from './cart-child/cart-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StoreComponent,
    ShoppingCartComponent,
    AboutPageComponent,
    StoreChildComponent,
    CartChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
