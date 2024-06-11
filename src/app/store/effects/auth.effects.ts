import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import {
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  registerSuccess,
  verifyToken,
  verifyTokenFailure,
  verifyTokenSuccess,
} from '../actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) =>
        this.authService.login(action.email, action.password).pipe(
          map((user) => loginSuccess({ user })),
          catchError((error) => of(loginFailure()))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap((action) =>
        this.authService
          .register(action.username, action.password, action.email)
          .pipe(
            map(() => registerSuccess()),
            catchError((error) => of(registerFailure()))
          )
      )
    )
  );

  verifyToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(verifyToken),
      mergeMap((action) =>
        this.authService.verifyToken(action.token).pipe(
          map((response) => verifyTokenSuccess({ user: response.user })),
          catchError(() => of(verifyTokenFailure()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}
}
