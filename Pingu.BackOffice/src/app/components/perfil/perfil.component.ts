import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  constructor(public loginservice: LoginService) {

  }

  async ngOnInit() {
    await this.loginservice.validatetoken()
  }
}
