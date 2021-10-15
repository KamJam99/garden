import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GardeningItem} from "../models/gardening-item";
import {CartItem} from "../models/cart-item";
import {Observable, of} from "rxjs";
import {tap, catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private cartItems: CartItem[] = [];
  private cartItemUrl = "api/cartItems"
  private gardeningItems: GardeningItem[] = [];
  private gardeningItemUrl = 'api/gardeningItems';
  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private http: HttpClient) {
  }

  getGardeningItems(): Observable<GardeningItem[]> {
    return this.http.get<GardeningItem[]>(this.gardeningItemUrl)
      .pipe(
        tap(_ => console.log("fetched gardening items")),
        catchError(this.handleError<GardeningItem[]>("getGardeningItems", []))
      );
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.cartItemUrl)
      .pipe(
        tap(_ => console.log("fetched cart items")),
        catchError(this.handleError<CartItem[]>("getCartItems", []))
      );
  }

  addToCart(gardeningItem: GardeningItem): Observable<CartItem[]> {

    let foundItem = this.cartItems.find(i => i.storeItemName === gardeningItem.name);

    if (foundItem) {
      foundItem.count += 1;
      foundItem.subTotal = gardeningItem.price * foundItem.count
      this.updateCartItem(foundItem);
    } else {
      let tempCartItem = new CartItem();
      tempCartItem.storeItemName = gardeningItem.name;
      tempCartItem.count = 1;
      tempCartItem.subTotal = gardeningItem.price;
      this.addCartItem(tempCartItem).subscribe(item => this.cartItems.push(item));
    }

    return of(this.cartItems);
  }

  removeCartItem(cartId: number): Observable<CartItem> {
    const url = `${this.cartItemUrl}/${cartId}`;
    return this.http.delete<CartItem>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log("deleted CartItem with id ${cartId}")),
        catchError(this.handleError<CartItem>("removeCartItem"))
      );
  }

  addIceCreamItem(item: GardeningItem): Observable<GardeningItem> {
    return this.http.post<GardeningItem>(this.gardeningItemUrl, item, this.httpOptions)
      .pipe(
        tap((newItem: GardeningItem) => console.log("added GardeningItem with id ${newItem.id}")),
        catchError(this.handleError<GardeningItem>("addGardeningItem"))
      );
  }

  addCartItem(item: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(this.cartItemUrl, item, this.httpOptions)
      .pipe(
        tap((newItem: CartItem) => console.log("added CartItem with id ${newItem.id}")),
        catchError(this.handleError<CartItem>("addCartItem"))
      );
  }

  updateCartItem(item: CartItem): Observable<CartItem> {
    return this.http.put<CartItem>(this.cartItemUrl, item, this.httpOptions)
      .pipe(
        tap(_ => console.log("updated CartItem with id ${item.id}")),
        catchError(this.handleError<CartItem>("updateCartItem"))
      );
  }

  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
