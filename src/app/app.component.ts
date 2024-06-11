import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { AppState } from './store/reducers';
import { verifyToken } from './store/actions/auth.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store
      .select((state) => state.session.user?.token)
      .subscribe((token) => {
        if (token) {
          this.store.dispatch(verifyToken({ token }));
        } else {
          this.router.navigate(['/auth']);
        }
      });

    this.store
      .select((state) => state.session.user)
      .subscribe((user) => {
        if (user) {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/auth']);
        }
      });
  }
}
