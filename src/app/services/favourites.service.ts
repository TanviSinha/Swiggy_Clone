import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private favourites: Set<any> = new Set();

  toggleFavourite(restaurant: any) {
    if (this.isFavourite(restaurant)) {
      this.removeFromFavourites(restaurant);
    } else {
      this.addToFavourites(restaurant);
    }
  }

  addToFavourites(restaurant: any) {
    this.favourites.add(restaurant);
  }

  removeFromFavourites(restaurant: any) {
    this.favourites.delete(restaurant);
  }

  isFavourite(restaurant: any): boolean {
    return this.favourites.has(restaurant);
  }
}
