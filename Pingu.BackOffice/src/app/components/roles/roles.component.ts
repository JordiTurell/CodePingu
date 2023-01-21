import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { IRolesVM } from '../../Models/RolesVM/IRoles';
import { LoginService } from '../../services/login.service';
import { RolesService } from '../../services/roles.service';

declare var $: any;

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})

export class RolesComponent implements AfterViewInit {

  public idClase: string = '';
  public columns: ColDef[] = [
    { field: 'id' },
    { field: 'name' }
  ];
  public data!: Observable<IRolesVM[]>;


  constructor(public loginservice: LoginService, private router: Router, private rolesservice: RolesService) {
    this.router.onSameUrlNavigation = 'reload'
  }

  async ngAfterViewInit(): Promise<void> {
    await this.loginservice.validatetoken()
  }

  CreateLoad() {
    this.router.navigate(['/dashboard/roles/create'])
  }

  EditLoad() {
    this.idClase = $('#edit').data('id')
    this.router.navigate(['/dashboard/roles/edit/' + this.idClase])
  }

  Delete() {
    this.idClase = $('#delete').data('id')
    this.rolesservice.Delete($('#delete').data('obj'));

    this.router.navigate(['/dashboard/lenguajes'])
  }
}
