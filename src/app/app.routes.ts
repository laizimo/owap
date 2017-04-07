import {Router, RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from './user/user-login/user-login.component';
import {IndexComponent} from './index/index.component';



export const appRoutes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: 'index',
    component: IndexComponent
  }
];
