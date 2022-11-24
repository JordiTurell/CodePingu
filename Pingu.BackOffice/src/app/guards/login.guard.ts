import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public loginservice : LoginService) {

  }
  canActivate(): boolean {
    if (this.loginservice.autentificado === true) { return true; }
    return false;
  }
  
}
