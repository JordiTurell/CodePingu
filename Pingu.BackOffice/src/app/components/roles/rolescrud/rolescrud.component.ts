import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { RequestItem } from '../../../Models/RequestItem';
import { ResponseItem } from '../../../Models/ResponseItem';
import { RolesVM } from '../../../Models/RolesVM/RolesVM';
import { LoginService } from '../../../services/login.service';
import { RolesService } from '../../../services/roles.service';

@Component({
  selector: 'app-rolescrud',
  templateUrl: './rolescrud.component.html',
  styleUrls: ['./rolescrud.component.scss']
})
export class RolescrudComponent {

  rolesform: FormGroup;
  idEdit: string = '';
  EditMode = false

  constructor(public loginservice: LoginService, private rolesservice: RolesService,
    private router: ActivatedRoute, private nav: Router, public fb: FormBuilder) {
    this.rolesform = this.fb.group({
      nombre: ['', Validators.required],
      id: ['']
    })
  }

  get f() { return this.rolesform.controls }

  async ngOnInit() {
    await this.loginservice.validatetoken()
    this.router.params.subscribe((params: Params) => {
      this.idEdit = params['id']
      this.EditMode = params['id'] != null
    })

    if (this.EditMode) {
      let data: RequestItem<RolesVM> = {
        item: {
          name: this.rolesform.controls['nombre'].value,
          id: Guid.parse(this.idEdit).toJSON().value
        },
        token: (this.loginservice.token != null) ? this.loginservice.token : '',
      }
      const itemEdit: ResponseItem<RolesVM> = await this.rolesservice.GetItem(data.item) as ResponseItem<RolesVM>
      try {
        this.rolesform.get('nombre')?.setValue(itemEdit.item.name)
        this.rolesform.get('id')?.setValue(itemEdit.item.id)
      } catch (ex) {
        this.nav.navigate(['/dashboard/roles'])
      }
    }
  }

  Atras() {
    window.history.back()
  }

  async Save() {
    if (this.rolesform.valid) {
      let data: RequestItem<RolesVM> = {
        item: {
          name: this.rolesform.controls['nombre'].value,
          id: Guid.create()
        },
        token: (this.loginservice.token != null) ? this.loginservice.token : '',
      }
      if (!this.EditMode) {
        this.rolesservice.Create(data.item)
      } else {
        data.item.id = Guid.parse(this.idEdit).toJSON().value
        this.rolesservice.Edit(data.item)
      }
    }
  }
}
