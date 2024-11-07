import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,RestaurantCardComponent,FooterComponent,RouterModule,HomeComponent,RouterLink,RouterLinkActive,CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title="swiggy"
  static routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'sign-in', component: SignInComponent },
   
  ];
  showFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showFooter = this.router.url !== '/search'; // Hide footer on /search route
    });
  }
};