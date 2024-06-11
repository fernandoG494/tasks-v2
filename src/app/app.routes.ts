import { Routes } from '@angular/router';
import { LoginRegisterContainerComponent } from './shared/layout/login-register-container/login-register-container.component';
import { DashboardComponent } from './dashboard/pages/dashboard/dashboard.component';
import { AuthGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  { path: 'auth', component: LoginRegisterContainerComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth' },
];
