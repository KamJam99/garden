import { Component, OnInit } from '@angular/core';
import { GardeningItem } from "../models/gardening-item";
import { CartItem } from "../models/cart-item";
import { ProductsService } from "../services/products.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: GardeningItem[] = [];
  cartKids: CartItem[] = [];

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productsService.getGardeningItems().subscribe(items => this.products = items);
    this.productsService.getCartItems().subscribe(items => this.cartKids = items);
  }

  addToCart(gardeningItem: GardeningItem): void {
    this.productsService.addToCart(gardeningItem).subscribe(items => this.cartKids = items);
  }

  removeFromCart(cartId: number): void {
    this.productsService.removeCartItem(cartId).subscribe(item => {
      const index = this.cartKids.findIndex(item => item.id === cartId);
      if (index > -1) {
        this.cartKids.splice(index, 1);
      }
    });
  }
}
