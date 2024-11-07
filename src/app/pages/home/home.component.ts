import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RestaurantCardComponent } from '../../components/restaurant-card/restaurant-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RestaurantCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cuisinesTop = [
    { name: 'Biryani', image: '../assets/images/Biryani.avif' },
    { name: 'Burger', image: '../assets/images/Burger.avif' },
    { name: 'Cake', image: '../assets/images/Cake.avif' },
    { name: 'Chinese', image: '../assets/images/Chinese.avif' },
    { name: 'Chole_bhature', image: '../assets/images/Chole_bhature.avif' },
    { name: 'Dosa', image: '../assets/images/Dosa.avif' },
    { name: 'Noodles', image: '../assets/images/Noodles.avif' },
    { name: 'North_indian', image: '../assets/images/North_Indian.avif' }
  ];

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
  restaurants = [
    {
      id: '1',
      name: 'Raat Raja Kitchen',
      offer: '₹100 OFF ABOVE ₹349',
      rating: 4.2,
      time: '30-35 mins',
      cuisine: 'Thalis, Biryani, North Indian',
      location: 'Srikrishnapuri',
      image: '../assets/images/Raat_Raja_Kitchen.avif',
    },
    {
      id: '2',
      name: 'Pizza Hut',
      offer: '50% OFF UPTO ₹100',
      rating: 4.2,
      time: '25-30 mins',
      cuisine: 'Pizzas',
      location: 'Kankarbagh',
      image: '../assets/images/Pizza_Hut.avif', 
    },
    {
      id: '3',
      name: "La Pino'z Pizza",
      offer: '50% OFF UPTO ₹100',
      rating: 4.1,
      time: '20-25 mins',
      cuisine: 'Pizzas, Italian, Beverages',
      location: 'Kankarbagh',
      image: '../assets/images/Lapinoz_Pizza.avif',
    },
    {
      id: '4',
      name: "McDonald's",
      offer: null, 
      rating: 4.4,
      time: '25-30 mins',
      cuisine: 'American',
      location: 'Golambar',
      image: '../assets/images/McDonald.avif',
    },
    {
      id: '5',
      name: 'KFC',
      offer: '30% OFF UPTO ₹75',
      rating: 4.4,
      time: '25-30 mins',
      cuisine: 'Burgers, Rolls & Wraps',
      location: 'Kankarbagh',
      image: '../assets/images/KFC.avif',
    },
    {
      id: '6',
      name: 'Burger Singh ',
      offer: '40% OFF UPTO ₹80',
      rating: 4.3,
      time: '20-25 mins',
      cuisine: 'American, Desserts,Burgers',
      location: 'Kankarbagh',
      image: '../assets/images/Burger_Singh.avif',
    },
    {
      id: '7',
      name: 'New Pal Hotel',
      offer: '₹50 OFF ABOVE ₹199',
      rating: 3.8,
      time: '30-35 mins',
      cuisine: 'Indian, Chinese, Tandoor',
      location: 'Fraser Road',
      image: '../assets/images/New_Pal_Hotel.avif',
    },
    {
      id: '8',
      name: 'Burger King',
      offer: 'ITEMS AT ₹99',
      rating: 4.2,
      time: '30-35 mins',
      cuisine: 'Burgers, American',
      location: 'Lodipur',
      image: '../assets/images/Burger_King.avif',
    },
  ];
  constructor(private router: Router) {}

  navigateToMenu(restaurantId: string): void {
    this.router.navigate(['/menu', restaurantId]);
  }
}
