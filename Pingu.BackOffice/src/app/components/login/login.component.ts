import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from "./../../services/login.service";

declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss']
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(public loginservice: LoginService, private router: Router) { }

  ngOnInit() {
    let token: string | null = localStorage.getItem('token')
    if (token != null) {
      this.loginservice.guardartoken(token)
      this.router.navigate(['/dashboard/home'])
    }
  }

  async login(f: NgForm) {
    $('loading').modal('show')
    await this.loginservice.login(f.value.username, f.value.pass);

    if (this.loginservice.autentificado) {
      if (f.value.Savetoken) {
        if (this.loginservice.token != null) {
          localStorage.setItem('token', this.loginservice.token)
        }
      }
      this.router.navigate(['/dashboard/home'])
    } else {
      this.router.navigate(['/login'])
    }
  }
}
