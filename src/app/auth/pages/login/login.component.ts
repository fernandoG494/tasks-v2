import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginRegisterContainerComponent } from '../../../shared/layout/login-register-container/login-register-container.component';

@Component({
  imports: [LoginRegisterContainerComponent, MatTabsModule],
  selector: 'auth-login',
  standalone: true,
  styleUrl: './login.component.scss',
  templateUrl: './login.component.html',
})
export class LoginComponent {}
