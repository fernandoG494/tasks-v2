import { Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { LoginRegisterContainerComponent } from './shared/layout/login-register-container/login-register-container.component';

export const routes: Routes = [
  { path: 'login', component: LoginRegisterContainerComponent },
  // { path: 'register', component: RegisterComponent },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   canActivate: [AuthGuard],
  // },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
