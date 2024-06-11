import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: any }>()
);

export const loginFailure = createAction('[Auth] Login Failure');

export const logout = createAction('[Auth] Logout');

export const register = createAction(
  '[Auth] Register',
  props<{ username: string; password: string; email: string }>()
);

export const registerSuccess = createAction('[Auth] Register Success');

export const registerFailure = createAction('[Auth] Register Failure');

export const verifyToken = createAction(
  '[Auth] Verify Token',
  props<{ token: string }>()
);

export const verifyTokenSuccess = createAction(
  '[Auth] Verify Token Success',
  props<{ user: any }>()
);

export const verifyTokenFailure = createAction('[Auth] Verify Token Failure');
