import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  cuisinesBottom = [
    { name: 'Paratha', image: '../assets/images/Paratha.avif' },
    { name: 'Pasta', image: '../assets/images/Pasta.avif' },
    { name: 'Pav_Bhaji', image: '../assets/images/Pav_Bhaji.avif' },
    { name: 'Pizza', image: '../assets/images/Pizzas.avif' },
    { name: 'Rasmalai', image: '../assets/images/Rasmalai.avif' },
    { name: 'Poori', image: '../assets/images/Poori.avif' },
    { name: 'Rolls', image: '../assets/images/Rolls.avif' },
    { name: 'Shake', image: '../assets/images/Shake.avif' }
  ];
  searchQuery: string = '';
  restaurants = [
    'Raat Raja Kitchen',
    'La Pino\'z Pizza',
    'Pizza Hut',
    'McDonald\'s',
    'KFC',
    'Burger Singh',
    'New Pal Hotel',
    'Burger King'
  ];
  searchResults: string[] = [];
  onSearch(): void {
    this.searchResults = this.restaurants.filter(restaurant => 
      restaurant.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
