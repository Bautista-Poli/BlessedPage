import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart, CartItem } from '../Interface/cart.interface'


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>({items: []});
  constructor(private _snackBar : MatSnackBar) { }

  addToCart(item: CartItem):void{
    const items = [...this.cart.value.items];
    //[...] It's used here to create a shallow copy of the items array.
    // Changes made to those elements in either the original or copied array will affect both arrays.

    const itemInCart = items.find((_item) => _item.id === item.id);
    if(itemInCart){
      itemInCart.quantity +=1
    }else{
      items.push(item);
    }
    this.cart.next({items});
    this._snackBar.open(' El producto fue añadido al carrito','Ok');
    console.log(this.cart.value);
  }

  getCartItems():Observable<Cart>{
    return this.cart.asObservable();
  }
  /*
  getCart(): Cart {
    return this.cart.getValue();
  }
  */

  removeCartItem(id: number):void{
    const currentCart = this.cart.getValue();

    // Find the index of the item to remove
    const indexToRemove = currentCart.items.findIndex(item => item.id === id);

    // If item with given ID exists, remove it
    if (indexToRemove !== -1) {
      currentCart.items.splice(indexToRemove, 1);

      // Emit the updated cart
      this.cart.next(currentCart);
    }
    console.log(this.cart.getValue());
    
  }
  
  removeFromCart(item: CartItem, updateCart = true): CartItem[] {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );

    if (updateCart) {
      this.cart.next({ items: filteredItems });
      this._snackBar.open('1 item removed from cart.', 'Ok', {
        duration: 3000,
      });
    }

    return filteredItems;
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open('Cart is cleared.', 'Ok', {
      duration: 3000,
    });
  }

  
  /*
  find(_item:number){
      
  }
  */
}
