import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  // tslint:disable-next-line:typedef
  canActivate() {
    return this.authService.isLoggedIn();
  }
}
