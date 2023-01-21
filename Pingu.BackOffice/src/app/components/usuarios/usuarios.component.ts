import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { IUsuarios } from '../../Models/Usuarios/IUsuarios';
import { LoginService } from '../../services/login.service';
import { UsuariosService } from '../../services/usuarios.service';

declare var $: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements AfterViewInit {

  public idClase: string = '';
  public columns: ColDef[] = [
    { field: 'id' },
    { field: 'nombre' },
    { field: 'rol' }
  ];
  public data!: Observable<IUsuarios[]>;

  constructor(public loginservice: LoginService, private router: Router, private usuarioservice: UsuariosService) {
    this.router.onSameUrlNavigation = 'reload'
  }

  async ngAfterViewInit(): Promise<void> {
    await this.loginservice.validatetoken()
  }

  EditLoad() {
    this.idClase = $('#edit').data('id')
    this.router.navigate(['/dashboard/usuario/edit/' + this.idClase])
  }
}
