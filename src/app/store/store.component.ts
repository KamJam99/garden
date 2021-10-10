import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GardeningItem } from "../models/gardening-item";
import { ProductsService } from "../services/products.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  products: GardeningItem[] = [];

  constructor(private productsService: ProductsService, private router: Router) {
  }

  ngOnInit(): void {
    this.productsService.getGardeningItems().subscribe(items => this.products = items);
  }

}
