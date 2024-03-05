import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/layout/layout.routes').then((m) => m.LAYOUT_ROUTERS),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.routers').then((m) => m.LOGIN_ROUTERS),
  },
  {
    path: 'interest',
    loadChildren: () =>
      import('./pages/interest/interest.routers').then(
        (m) => m.INTEREST_ROUTERS,
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.routers').then(
        (m) => m.REGISTER_ROUTERS,
      ),
  },

  {
    path: 'detail',
    loadChildren: () =>
      import('./pages/detail/detail.routers').then((m) => m.DETAIL_ROUTERS),
  }
];
