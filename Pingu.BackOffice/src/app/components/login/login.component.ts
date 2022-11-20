import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss']
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor() { }

  login(f: NgForm) {
    console.log(f.value);
  }
}
