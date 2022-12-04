import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { LenguajesVM } from '../../Models/LenguajesVM';
import { ResponseList } from '../../Models/ResponseList';
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
  public data!: Observable<LenguajesVM[]>;
    
  constructor(public loginservice: LoginService, private router : Router, private lenguajesservices : LenguajesServices) {

  }

  async ngAfterViewInit(): Promise<void> {
    await this.loginservice.validatetoken()
  }

  CreateLoad() {
    this.router.navigate(['/dashboard/lenguajes/create'])
  }

  EditLoad() {
    this.router.navigate(['/dashboard/lenguajes/edit/'+ this.idClase ])
  }
}
