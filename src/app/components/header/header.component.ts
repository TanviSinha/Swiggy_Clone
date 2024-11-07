import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen = false;
  isCartVisible = false;

  constructor(private router: Router, private cartService: CartService) {}

  get cartItemCount(): number {
    return this.cartService.cartItemCount;
  }

  get cartTotalPrice(): number {
    return this.cartService.cartTotalPrice;
  }

  get cartItems() {
    return Array.from(this.cartService['cart'].values()); 
  }
  toggleCart(): void {
    this.isCartVisible = !this.isCartVisible;
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }

  navigateToSignIn() {
    this.router.navigate(['/sign-in']);
  }

  navigateToSearch() {
    this.router.navigate(['/search']);
  }
  checkout(): void {
    this.router.navigate(['/checkout']);
  }
}