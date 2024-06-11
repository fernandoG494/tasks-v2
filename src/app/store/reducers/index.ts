import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { authReducer } from './auth.reducers';
import { environment } from '../../../environments/development';
import { AuthState } from '../../auth/interfaces/store.interface';

export interface AppState {
  session: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  session: authReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
