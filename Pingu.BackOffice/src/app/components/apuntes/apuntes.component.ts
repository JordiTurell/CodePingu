import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { IApuntesVM } from '../../Models/ApuntesVM/IApuntesVM';
import { ApuntesService } from '../../services/apuntes.service';
import { LoginService } from '../../services/login.service';

declare var $: any;

@Component({
  selector: 'app-apuntes',
  templateUrl: './apuntes.component.html',
  styleUrls: ['./apuntes.component.scss']
})
export class ApuntesComponent implements AfterViewInit {

  public idClase = '';
  public columns: ColDef[] = [
    { field: 'id' },
    { field: 'titulo' },
    { field: 'fecha' },
    { field: 'visitas' },
    { field: 'puntuacion' },
    { field: 'avilitado' },
  ]

  public data!: Observable<IApuntesVM[]>;

  constructor(public loginservice: LoginService, private router: Router, private apuntesservice: ApuntesService) {
    this.router.onSameUrlNavigation = 'reload'
  }

  async ngAfterViewInit(): Promise<void> {
    await this.loginservice.validatetoken()
  }

  Create() {
    this.router.navigate(['/dashboard/apuntes/create'])
  }

  Edit() {
    this.idClase = $('#edit').data('id')
    this.router.navigate(['/dashboard/apuntes/edit/' + this.idClase])
  }

  Delete() {
    this.idClase = $('#delete').data('id')
    this.apuntesservice.Delete($('#delete').data('obj'));

    this.router.navigate(['/dashboard/lenguajes'])
  }
}
