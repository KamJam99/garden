import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CartItem} from "../models/cart-item";

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.css']
})
export class CartChildComponent implements OnInit {

  @Input() cartKid?: CartItem;
  @Output() removeFromCartEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeFromCart(cartItemId?: number) {
    this.removeFromCartEvent.emit(cartItemId);
  }
}
