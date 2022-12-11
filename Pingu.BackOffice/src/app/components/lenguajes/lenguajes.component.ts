import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { ILenguajesVM } from '../../Models/LenguajesVM/ILenguajesVM';
import { LenguajesVM } from '../../Models/LenguajesVM/LenguajesVM';
import { RequestItem } from '../../Models/RequestItem';
import { LenguajesServices } from '../../services/lenguajes.service';
import { LoginService } from '../../services/login.service';

declare var $: any;

@Component({
  selector: 'app-clases',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.scss']
})
export class LenguajesComponent implements AfterViewInit{

  public idClase: string = '';
  public columns: ColDef[] = [
    { field: 'id' },
    { field: 'nombre' }
  ];
  public data!: Observable<ILenguajesVM[]>;
    
  constructor(public loginservice: LoginService, private router : Router, private lenguajesservices : LenguajesServices) {
    this.router.onSameUrlNavigation = 'reload'
  }

  async ngAfterViewInit(): Promise<void> {
    await this.loginservice.validatetoken()
  }

  CreateLoad() {
    this.router.navigate(['/dashboard/lenguajes/create'])
  }

  EditLoad() {
    this.idClase = $('#edit').data('id')
    this.router.navigate(['/dashboard/lenguajes/edit/'+ this.idClase ])
  }

  Delete() {
    this.idClase = $('#delete').data('id')
    this.lenguajesservices.Delete($('#delete').data('obj'));
    window.location.reload();
    this.router.navigate(['/dashboard/lenguajes'])
  }
}
