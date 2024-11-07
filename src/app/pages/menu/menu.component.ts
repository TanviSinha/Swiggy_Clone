import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  restaurantId: string | null = null;
  menuItems: { name: string, price: number, description: string, category: string, rating: number, reviews: number , image:any}[] = [];
  cartItems: { name: string, price: number, quantity: number }[] = [];

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
    if (this.restaurantId) {
      this.fetchMenu(this.restaurantId);
    }
  }

  fetchMenu(restaurantId: string): void {
    const menus: { [key: string]: { name: string, price: number, description: string, category: string, rating: number, reviews: number ,image:any }[] } = {
      '1': [
        { name: 'Pizza', price: 299, description: 'Cheesy pizza topped with fresh vegetables and herbs.', category: 'Veg Item', rating: 3.9, reviews: 3 , image:'../assets/images/Pizza_menu.avif',},
          { name: 'Paneer Masala', price: 199, description: 'Rich and creamy paneer masala with spices.', category: 'Veg Item', rating: 3.6, reviews: 14 ,image:'../assets/images/Panner_masala.avif',},
          { name: 'Chocolate Cake', price: 149, description: 'Decadent chocolate cake with layers of chocolate ganache.', category: 'Veg Item', rating: 3.7, reviews: 5,image:'../assets/images/Cake_menu.avif', },
          { name: 'Butter Naan', price: 49, description:  'Soft and fluffy butter naan, perfect with curries.', category: 'Veg Item', rating: 3.2, reviews: 5 ,image:'../assets/images/Naan.avif',},
          { name: 'Biryani', price: 349, description: 'Aromatic and spicy biryani with tender pieces of meat.', category: 'Non-Veg Item', rating: 4.2, reviews: 7, image: '../assets/images/Biryani_menu.avif' },
          { name: 'Masala Dosa', price: 89, description: 'Crispy dosa with spiced potato filling.', category: 'Veg Item', rating: 4.0, reviews: 11, image: '../assets/images/Dosa_menu.avif' },
          { name: 'Burger', price: 199, description: 'Juicy burger with cheese and fresh veggies.', category: 'Non-Veg Item', rating: 3.8, reviews: 8, image: '../assets/images/Dosa_menu.avif' },
          { name: 'Milkshake', price: 99, description: 'Chilled milkshake with rich flavors.', category: 'Beverage', rating: 4.1, reviews: 4, image: '../assets/images/Shake_menu.avif' },
      ],
      '2': [
        { name: 'Pizza', price: 299, description: 'Cheesy pizza topped with fresh vegetables and herbs.', category: 'Veg Item', rating: 3.9, reviews: 3 , image:'../assets/images/Pizza_menu.avif',},
          { name: 'Paneer Masala', price: 199, description: 'Rich and creamy paneer masala with spices.', category: 'Veg Item', rating: 3.6, reviews: 14 ,image:'../assets/images/Panner_masala.avif',},
          { name: 'Chocolate Cake', price: 149, description: 'Decadent chocolate cake with layers of chocolate ganache.', category: 'Veg Item', rating: 3.7, reviews: 5,image:'../assets/images/Cake_menu.avif', },
          { name: 'Butter Naan', price: 49, description:  'Soft and fluffy butter naan, perfect with curries.', category: 'Veg Item', rating: 3.2, reviews: 5 ,image:'../assets/images/Naan.avif',},
          { name: 'Biryani', price: 349, description: 'Aromatic and spicy biryani with tender pieces of meat.', category: 'Non-Veg Item', rating: 4.2, reviews: 7, image: '../assets/images/Biryani_menu.avif' },
          { name: 'Masala Dosa', price: 89, description: 'Crispy dosa with spiced potato filling.', category: 'Veg Item', rating: 4.0, reviews: 11, image: '../assets/images/Dosa_menu.avif' },
          { name: 'Burger', price: 199, description: 'Juicy burger with cheese and fresh veggies.', category: 'Non-Veg Item', rating: 3.8, reviews: 8, image: '../assets/images/Dosa_menu.avif' },
          { name: 'Milkshake', price: 99, description: 'Chilled milkshake with rich flavors.', category: 'Beverage', rating: 4.1, reviews: 4, image: '../assets/images/Shake_menu.avif' },
      ],
      '3': [
        { name: 'Pizza', price: 299, description: 'Cheesy pizza topped with fresh vegetables and herbs.', category: 'Veg Item', rating: 3.9, reviews: 3 , image:'../assets/images/Pizza_menu.avif',},
          { name: 'Paneer Masala', price: 199, description: 'Rich and creamy paneer masala with spices.', category: 'Veg Item', rating: 3.6, reviews: 14 ,image:'../assets/images/Panner_masala.avif',},
          { name: 'Chocolate Cake', price: 149, description: 'Decadent chocolate cake with layers of chocolate ganache.', category: 'Veg Item', rating: 3.7, reviews: 5,image:'../assets/images/Cake_menu.avif', },
          { name: 'Butter Naan', price: 49, description:  'Soft and fluffy butter naan, perfect with curries.', category: 'Veg Item', rating: 3.2, reviews: 5 ,image:'../assets/images/Naan.avif',},
          { name: 'Biryani', price: 349, description: 'Aromatic and spicy biryani with tender pieces of meat.', category: 'Non-Veg Item', rating: 4.2, reviews: 7, image: '../assets/images/Biryani_menu.avif' },
          { name: 'Masala Dosa', price: 89, description: 'Crispy dosa with spiced potato filling.', category: 'Veg Item', rating: 4.0, reviews: 11, image: '../assets/images/Dosa_menu.avif' },
          { name: 'Burger', price: 199, description: 'Juicy burger with cheese and fresh veggies.', category: 'Non-Veg Item', rating: 3.8, reviews: 8, image: '../assets/images/Dosa_menu.avif' },
          { name: 'Milkshake', price: 99, description: 'Chilled milkshake with rich flavors.', category: 'Beverage', rating: 4.1, reviews: 4, image: '../assets/images/Shake_menu.avif' },
      ],
      '4': [
        { name: 'Pizza', price: 299, description: 'Cheesy pizza topped with fresh vegetables and herbs.', category: 'Veg Item', rating: 3.9, reviews: 3 , image:'../assets/images/Pizza_menu.avif',},
        { name: 'Paneer Masala', price: 199, description: 'Rich and creamy paneer masala with spices.', category: 'Veg Item', rating: 3.6, reviews: 14 ,image:'../assets/images/Panner_masala.avif',},
        { name: 'Chocolate Cake', price: 149, description: 'Decadent chocolate cake with layers of chocolate ganache.', category: 'Veg Item', rating: 3.7, reviews: 5,image:'../assets/images/Cake_menu.avif', },
        { name: 'Butter Naan', price: 49, description:  'Soft and fluffy butter naan, perfect with curries.', category: 'Veg Item', rating: 3.2, reviews: 5 ,image:'../assets/images/Naan.avif',},
        { name: 'Biryani', price: 349, description: 'Aromatic and spicy biryani with tender pieces of meat.', category: 'Non-Veg Item', rating: 4.2, reviews: 7, image: '../assets/images/Biryani_menu.avif' },
        { name: 'Masala Dosa', price: 89, description: 'Crispy dosa with spiced potato filling.', category: 'Veg Item', rating: 4.0, reviews: 11, image: '../assets/images/Dosa_menu.avif' },
        { name: 'Burger', price: 199, description: 'Juicy burger with cheese and fresh veggies.', category: 'Non-Veg Item', rating: 3.8, reviews: 8, image: '../assets/images/Dosa_menu.avif' },
        { name: 'Milkshake', price: 99, description: 'Chilled milkshake with rich flavors.', category: 'Beverage', rating: 4.1, reviews: 4, image: '../assets/images/Shake_menu.avif' },
      ],
      '5': [
        { name: 'Pizza', price: 299, description: 'Cheesy pizza topped with fresh vegetables and herbs.', category: 'Veg Item', rating: 3.9, reviews: 3 , image:'../assets/images/Pizza_menu.avif',},
          { name: 'Paneer Masala', price: 199, description: 'Rich and creamy paneer masala with spices.', category: 'Veg Item', rating: 3.6, reviews: 14 ,image:'../assets/images/Panner_masala.avif',},
          { name: 'Chocolate Cake', price: 149, description: 'Decadent chocolate cake with layers of chocolate ganache.', category: 'Veg Item', rating: 3.7, reviews: 5,image:'../assets/images/Cake_menu.avif', },
          { name: 'Butter Naan', price: 49, description:  'Soft and fluffy butter naan, perfect with curries.', category: 'Veg Item', rating: 3.2, reviews: 5 ,image:'../assets/images/Naan.avif',},
          { name: 'Biryani', price: 349, description: 'Aromatic and spicy biryani with tender pieces of meat.', category: 'Non-Veg Item', rating: 4.2, reviews: 7, image: '../assets/images/Biryani_menu.avif' },
          { name: 'Masala Dosa', price: 89, description: 'Crispy dosa with spiced potato filling.', category: 'Veg Item', rating: 4.0, reviews: 11, image: '../assets/images/Dosa_menu.avif' },
          { name: 'Burger', price: 199, description: 'Juicy burger with cheese and fresh veggies.', category: 'Non-Veg Item', rating: 3.8, reviews: 8, image: '../assets/images/Dosa_menu.avif' },
          { name: 'Milkshake', price: 99, description: 'Chilled milkshake with rich flavors.', category: 'Beverage', rating: 4.1, reviews: 4, image: '../assets/images/Shake_menu.avif' },
      ],
      '6': [
        { name: 'Pizza', price: 299, description: 'Cheesy pizza topped with fresh vegetables and herbs.', category: 'Veg Item', rating: 3.9, reviews: 3 , image:'../assets/images/Pizza_menu.avif',},
        { name: 'Paneer Masala', price: 199, description: 'Rich and creamy paneer masala with spices.', category: 'Veg Item', rating: 3.6, reviews: 14 ,image:'../assets/images/Panner_masala.avif',},
        { name: 'Chocolate Cake', price: 149, description: 'Decadent chocolate cake with layers of chocolate ganache.', category: 'Veg Item', rating: 3.7, reviews: 5,image:'../assets/images/Cake_menu.avif', },
        { name: 'Butter Naan', price: 49, description:  'Soft and fluffy butter naan, perfect with curries.', category: 'Veg Item', rating: 3.2, reviews: 5 ,image:'../assets/images/Naan.avif',},
        { name: 'Biryani', price: 349, description: 'Aromatic and spicy biryani with tender pieces of meat.', category: 'Non-Veg Item', rating: 4.2, reviews: 7, image: '../assets/images/Biryani_menu.avif' },
        { name: 'Masala Dosa', price: 89, description: 'Crispy dosa with spiced potato filling.', category: 'Veg Item', rating: 4.0, reviews: 11, image: '../assets/images/Dosa_menu.avif' },
        { name: 'Burger', price: 199, description: 'Juicy burger with cheese and fresh veggies.', category: 'Non-Veg Item', rating: 3.8, reviews: 8, image: '../assets/images/Dosa_menu.avif' },
        { name: 'Milkshake', price: 99, description: 'Chilled milkshake with rich flavors.', category: 'Beverage', rating: 4.1, reviews: 4, image: '../assets/images/Shake_menu.avif' },
      ],
      '7': [
        { name: 'Pizza', price: 299, description: 'Cheesy pizza topped with fresh vegetables and herbs.', category: 'Veg Item', rating: 3.9, reviews: 3 , image:'../assets/images/Pizza_menu.avif',},
          { name: 'Paneer Masala', price: 199, description: 'Rich and creamy paneer masala with spices.', category: 'Veg Item', rating: 3.6, reviews: 14 ,image:'../assets/images/Panner_masala.avif',},
          { name: 'Chocolate Cake', price: 149, description: 'Decadent chocolate cake with layers of chocolate ganache.', category: 'Veg Item', rating: 3.7, reviews: 5,image:'../assets/images/Cake_menu.avif', },
          { name: 'Butter Naan', price: 49, description:  'Soft and fluffy butter naan, perfect with curries.', category: 'Veg Item', rating: 3.2, reviews: 5 ,image:'../assets/images/Naan.avif',},
          { name: 'Biryani', price: 349, description: 'Aromatic and spicy biryani with tender pieces of meat.', category: 'Non-Veg Item', rating: 4.2, reviews: 7, image: '../assets/images/Biryani_menu.avif' },
          { name: 'Masala Dosa', price: 89, description: 'Crispy dosa with spiced potato filling.', category: 'Veg Item', rating: 4.0, reviews: 11, image: '../assets/images/Dosa_menu.avif' },
          { name: 'Burger', price: 199, description: 'Juicy burger with cheese and fresh veggies.', category: 'Non-Veg Item', rating: 3.8, reviews: 8, image: '../assets/images/Dosa_menu.avif' },
          { name: 'Milkshake', price: 99, description: 'Chilled milkshake with rich flavors.', category: 'Beverage', rating: 4.1, reviews: 4, image: '../assets/images/Shake_menu.avif' },
      ],
      '8': [
        { name: 'Pizza', price: 299, description: 'Cheesy pizza topped with fresh vegetables and herbs.', category: 'Veg Item', rating: 3.9, reviews: 3 , image:'../assets/images/Biryani.avif',},
        { name: 'Paneer Masala', price: 199, description: 'Rich and creamy paneer masala with spices.', category: 'Veg Item', rating: 3.6, reviews: 14 ,image:'../assets/images/Biryani.avif',},
        { name: 'Chocolate Cake', price: 149, description: 'Decadent chocolate cake with layers of chocolate ganache.', category: 'Veg Item', rating: 3.7, reviews: 5,image:'../assets/images/Biryani.avif', },
        { name: 'Butter Naan', price: 49, description:  'Soft and fluffy butter naan, perfect with curries.', category: 'Veg Item', rating: 3.2, reviews: 5 ,image:'../assets/images/Biryani.avif',},
        { name: 'Biryani', price: 349, description: 'Aromatic and spicy biryani with tender pieces of meat.', category: 'Non-Veg Item', rating: 4.2, reviews: 7, image: '../assets/images/Biryani.avif' },
        { name: 'Masala Dosa', price: 89, description: 'Crispy dosa with spiced potato filling.', category: 'Veg Item', rating: 4.0, reviews: 11, image: '../assets/images/Biryani.avif' },
        { name: 'Burger', price: 199, description: 'Juicy burger with cheese and fresh veggies.', category: 'Non-Veg Item', rating: 3.8, reviews: 8, image: '../assets/images/Biryani.avif' },
        { name: 'Milkshake', price: 99, description: 'Chilled milkshake with rich flavors.', category: 'Beverage', rating: 4.1, reviews: 4, image: '../assets/images/Biryani.avif' }
      ]
    };
    this.menuItems = menus[restaurantId] || [];
  }

  addToCart(item: { name: string, price: number }) {
    this.cartService.addToCart(item);
  }

  removeFromCart(item: { name: string, price: number }) {
    this.cartService.removeFromCart(item);
  }

  isInCart(item: { name: string }): boolean {
    return this.cartService.getCartItemQuantity(item.name) > 0;
  }

  getCartQuantity(item: { name: string }): number {
    return this.cartService.getCartItemQuantity(item.name);
  }

  get cartItemCount(): number {
    return this.cartService.cartItemCount;
  }

  get cartTotalPrice(): number {
    return this.cartService.cartTotalPrice;
  }
}
