import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { GardeningItem } from "../models/gardening-item";
import { CartItem } from "../models/cart-item";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const gardeningItems: GardeningItem[] = [
      { id: 1, name: 'Shovel', price: 3, itemPicture: '/assets/garden-images/Shovel.png' },
      { id: 2, name: 'Rake', price: 4, itemPicture: '/assets/garden-images/Rake.jpeg' },
      { id: 3, name: 'Shears', price: 3, itemPicture: '/assets/garden-images/Shears.jpeg' },
      { id: 4, name: 'Hose', price: 6, itemPicture: '/assets/garden-images/Hose.jpeg' },
      { id: 5, name: 'Watering Can', price: 5, itemPicture: '/assets/garden-images/Watering-can.jpeg' },
      { id: 6, name: 'Trowel', price: 7, itemPicture: '/assets/garden-images/Trowel.jpeg' },
      { id: 7, name: 'Wheelbarrow', price: 8, itemPicture: '/assets/garden-images/Wheelbarrow.jpeg' },
      { id: 8, name: 'Spade', price: 6, itemPicture: '/assets/garden-images/Spade.jpeg' },
      { id: 9, name: 'Weeder', price: 8, itemPicture: '/assets/garden-images/Weeder.jpeg' },
      { id: 10, name: 'Hoe', price: 7, itemPicture: '/assets/garden-images/Hoe.jpeg' }
    ];
    const cartItems: CartItem[] = [
      { id: 1, storeItemName: 'Shovel', count: 1, subTotal: 3 }
    ];
    return {gardeningItems, cartItems};
  }

  genId<T extends GardeningItem>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id as number)) + 1 : 1;
  }
}
