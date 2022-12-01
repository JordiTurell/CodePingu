import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LenguajesVM } from '../../Models/LenguajesVM';
import { ResponseList } from '../../Models/ResponseList';
import { LenguajesServices } from '../../services/lenguajes.service';
import { LoginService } from '../../services/login.service';
import { CustomTablas } from '../Utils/Tablas/tabla';

declare var $: any;

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements AfterViewInit{

  public idClase: string = '';
  private tabla : CustomTablas<LenguajesVM> | undefined;
    
  constructor(public loginservice: LoginService, private router : Router, private lenguajesservices : LenguajesServices) {

  }

  async ngAfterViewInit(): Promise<void> {
    await this.loginservice.validatetoken()
    $('#loading').modal('show')
    await this.LoadTable()
  }

  async LoadTable() {
    var list: ResponseList<LenguajesVM> | any = await this.lenguajesservices.GetList()
    $('#loading').modal('hide')
    if (this.tabla === undefined) { this.tabla = new CustomTablas<LenguajesVM>(list) }
    this.tabla.onInit()
  }

  CreateLoad() {
    this.router.navigate(['/dashboard/clases/create'])
  }

  EditLoad() {
    this.router.navigate(['/dashboard/clases/edit/'+ this.idClase ])
  }
}
