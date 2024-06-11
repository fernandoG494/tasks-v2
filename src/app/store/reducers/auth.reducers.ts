import {
  login,
  loginFailure,
  loginSuccess,
  logout,
  register,
  registerFailure,
  registerSuccess,
  verifyTokenFailure,
  verifyTokenSuccess,
} from '../actions/auth.actions';
import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../../auth/interfaces/store.interface';

export const initialState: AuthState = {
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({
    ...state,
  })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
  })),
  on(loginFailure, (state) => ({
    ...state,
    user: null,
  })),
  on(logout, (state) => ({
    ...state,
    user: null,
  })),
  on(register, (state) => ({
    ...state,
  })),
  on(registerSuccess, (state) => ({
    ...state,
  })),
  on(registerFailure, (state) => ({
    ...state,
  })),
  on(verifyTokenSuccess, (state, { user }) => ({
    ...state,
    user,
    token: user.token,
  })),
  on(verifyTokenFailure, (state) => ({
    ...state,
    user: null,
    token: null,
  }))
);
