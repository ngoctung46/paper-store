import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  login(userName, password): Observable<boolean> {
    return of(userName === 'admin' && password === 'nimda')
      .pipe(tap(_ => this.isLoggedIn = true));
  }

  logout() {
    this.isLoggedIn = false;
  }

}
