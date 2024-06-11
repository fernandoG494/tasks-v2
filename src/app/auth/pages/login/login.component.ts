import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  imports: [MatTabsModule],
  selector: 'auth-login',
  standalone: true,
  styleUrl: './login.component.scss',
  templateUrl: './login.component.html',
})
export class LoginComponent {}
