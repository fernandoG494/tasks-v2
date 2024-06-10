import { Component } from '@angular/core';
import { LoginRegisterContainerComponent } from '../../../shared/layout/login-register-container/login-register-container.component';

@Component({
  imports: [LoginRegisterContainerComponent],
  selector: 'auth-login',
  standalone: true,
  styleUrl: './login.component.scss',
  templateUrl: './login.component.html',
})
export class LoginComponent {}
