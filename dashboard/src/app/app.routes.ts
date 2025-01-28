import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path:'',
    component: AuthComponent,
  },
  {
    path:'home',
    component: HomeComponent
  }
];
