import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new Map<string, { name: string, price: number, quantity: number }>();
  cartItemCount$ = new BehaviorSubject<number>(0);
  cartTotalPrice$ = new BehaviorSubject<number>(0);

  addToCart(item: { name: string, price: number }) {
    const cartItem = this.cart.get(item.name);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.set(item.name, { ...item, quantity: 1 });
    }
    this.updateCartSummary();
  }

  removeFromCart(item: { name: string }) {
    const cartItem = this.cart.get(item.name);
    if (cartItem) {
      cartItem.quantity--;
      if (cartItem.quantity === 0) {
        this.cart.delete(item.name);
      }
    }
    this.updateCartSummary();
  }

  getCartItemQuantity(name: string): number {
    return this.cart.get(name)?.quantity || 0;
  }

  private updateCartSummary() {
    const itemCount = Array.from(this.cart.values()).reduce((count, item) => count + item.quantity, 0);
    const totalPrice = Array.from(this.cart.values()).reduce((total, item) => total + item.price * item.quantity, 0);
    this.cartItemCount$.next(itemCount);
    this.cartTotalPrice$.next(totalPrice);
  }

  get cartItemCount(): number {
    return this.cartItemCount$.value;
  }

  get cartTotalPrice(): number {
    return this.cartTotalPrice$.value;
  }
}
