import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppState } from '../../store/reducers';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store
      .select((state) => state.session.user)
      .pipe(
        take(1),
        map((user) => {
          if (user) {
            return true;
          } else {
            this.router.navigate(['/auth']);
            return false;
          }
        })
      );
  }
}
