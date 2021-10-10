export class CartItem {
  id?: number;
  storeItemName: string;
  count: number;
  subTotal: number;

  constructor() {
    this.id = undefined;
    this.storeItemName = "";
    this.count = 0;
    this.subTotal = 0.0;
  }
}
