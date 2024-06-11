import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from '../../../auth/pages/login/login.component';
import { RegisterComponent } from '../../../auth/pages/register/register.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    MatGridListModule,
    MatTabsModule,
    LoginComponent,
    RegisterComponent,
  ],
  selector: 'login-register-container',
  standalone: true,
  styleUrl: './login-register-container.component.scss',
  templateUrl: './login-register-container.component.html',
})
export class LoginRegisterContainerComponent {}
