import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LayoutComponent } from './layout/layout.component';
import { pagesRoute } from './pages/pages.routes';

export const routes: Routes = [
  {
    path:'',
    component: AuthComponent,
  },
  {
    path:'layout',
    component: LayoutComponent,
    children: [...pagesRoute]
  }
];
