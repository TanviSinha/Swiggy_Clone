import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'restaurant/:restaurantId/menu', component: MenuComponent },
    // other routes...
  ];
  

