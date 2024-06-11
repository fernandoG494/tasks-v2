import { Injectable } from '@angular/core';
import { environment } from '../../../environments/development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}`;

  register(name: string, password: string, email: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/user`, { name, password, email })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<{ user: any }>(`${this.apiUrl}/user/login`, { email, password })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  verifyToken(token: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/check-token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handleError({ error }: HttpErrorResponse) {
    let errorMessage = error.message;
    return of({ message: errorMessage, status: 'error' });
  }
}
