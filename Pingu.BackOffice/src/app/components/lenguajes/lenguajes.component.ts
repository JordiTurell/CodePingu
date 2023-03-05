import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { LenguajesVM } from '../../Models/LenguajesVM/LenguajesVM';
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
  public data!: Observable<any[]>;
    
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
    
    location.reload()
  }
}
