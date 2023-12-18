import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'stock-consol',
    loadComponent: () => import('./stock-consol/stock-consol.page').then( m => m.StockConsolPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },
  {
    path: 'map',
    loadComponent: () => import('./map/map.page').then( m => m.MapPage)
  },
  {
    path: 'stock-establishment',
    loadComponent: () => import('./stock-establishment/stock-establishment.page').then( m => m.StockEstablishmentPage)
  },
];
