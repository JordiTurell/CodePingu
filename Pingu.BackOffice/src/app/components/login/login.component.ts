import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from "./../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss']
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(public loginservice: LoginService) { }

  async login(f: NgForm) {
    
    const usuariovalido = await this.loginservice.login(f.value.username, f.value.pass);

    if (usuariovalido) {

    } else {
    
    }
  }
}
