import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { Component, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { MenuComponent } from './app/pages/menu/menu.component';
import { SearchComponent } from './app/pages/search/search.component';
import { SignInComponent } from './app/pages/sign-in/sign-in.component';



const routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'restaurant/:restaurantId/menu', component: MenuComponent },
  { path: 'sign-in', component: SignInComponent },

];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
});
