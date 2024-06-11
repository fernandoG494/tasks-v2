import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginStatus } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppState } from '../../../store/reducers';
import * as AuthActions from '../../../store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  imports: [MatTabsModule, FormsModule, ReactiveFormsModule, CommonModule],
  selector: 'auth-login',
  standalone: true,
  styleUrl: './login.component.scss',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public loginForm: FormGroup;

  public loginStatus: LoginStatus = {
    status: '',
    message: '',
  };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.getFormErrors();
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.loginStatus = {
          status: response.status,
          message: response.message,
        };

        if (response.user.email === this.loginForm.value.email) {
          this.store.dispatch(AuthActions.login({ email, password }));

          this.loginStatus = {
            status: 'success',
            message: `Welcome back, ${response.user.name}!`,
          };
        } else {
          this.loginStatus = {
            status: 'error',
            message: `Sorry, we can't find you :(`,
          };
        }
      },
      error: (error) => {
        console.error('Error en el registro', error);
      },
    });
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

  isValidField(field: string): boolean | null {
    return (
      this.loginForm.controls[field].errors &&
      this.loginForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.loginForm.controls[field]) return null;
    const errors = this.loginForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
        case 'email':
          return 'Formato de email inválido';
      }
    }
    return null;
  }

  getFormErrors() {
    const formErrors: { [key: string]: string } = {};

    Object.keys(this.loginForm.controls).forEach((key) => {
      const controlErrors = this.loginForm.get(key)?.errors;
      if (controlErrors) {
        formErrors[key] = this.getFieldError(key) || '';
      }
    });
    return formErrors;
  }

  buttonDisabled() {
    return this.loginForm.invalid;
  }

  showLoginStatus() {
    return this.loginStatus.status != '';
  }
}
