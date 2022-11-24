import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent {
  constructor(public loginservice: LoginService) { }

  async ngOnInit() {
    await this.loginservice.validatetoken()
  }

  getUserLogged() {
    
  }
}
