import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { LenguajesServices } from '../../../services/lenguajes.service';

import { Guid } from "guid-typescript";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestItem } from '../../../Models/RequestItem';
import { LenguajesVM } from '../../../Models/LenguajesVM/LenguajesVM';
import { ResponseItem } from '../../../Models/ResponseItem';

declare var $: any;

@Component({
  selector: 'app-create-edit-clases',
  templateUrl: './create-edit-lenguajes.component.html',
  styleUrls: ['./create-edit-lenguajes.component.scss']
})
export class CreateEditLenguajesComponent {

  lenguajesform: FormGroup;
  idEdit: string = '';
  EditMode = false
  
  constructor(public loginservice: LoginService, private lenguajesservices: LenguajesServices,
    private router: ActivatedRoute, private nav: Router, private fb: FormBuilder) {
    this.lenguajesform = this.fb.group({
      nombre: ['', Validators.required],
      id: ['']
    })
  }

  get f() { return this.lenguajesform.controls   }

  async ngOnInit() {
    await this.loginservice.validatetoken()
    this.router.params.subscribe((params: Params) => {
      this.idEdit = params['id']
      this.EditMode = params['id'] != null
    })

    if (this.EditMode) {
      let data: RequestItem<LenguajesVM> = {
        item: {
          nombre: this.lenguajesform.controls['nombre'].value,
          id: Guid.parse(this.idEdit).toJSON().value
        },
        token: (this.loginservice.token != null) ? this.loginservice.token : '',
      }
      const itemEdit: ResponseItem<LenguajesVM> = await this.lenguajesservices.Get(data.item) as ResponseItem<LenguajesVM>
      try {
        this.lenguajesform.get('nombre')?.setValue(itemEdit.item.nombre)
        this.lenguajesform.get('id')?.setValue(itemEdit.item.id)
      } catch (ex) {
        this.nav.navigate(['/dashboard/lenguajes'])
      }
    }
  }

  Atras() {
    window.history.back()
  }

  async Save() {
    if (this.lenguajesform.valid) {
      let data: RequestItem<LenguajesVM> = {
        item: {
          nombre: this.lenguajesform.controls['nombre'].value,
          id: Guid.create()
        },
        token: (this.loginservice.token != null) ? this.loginservice.token : '',
      }
      if (!this.EditMode) {
        this.lenguajesservices.Create(data.item)
      } else {
        data.item.id = Guid.parse(this.idEdit).toJSON().value
        this.lenguajesservices.Edit(data.item)
      }
    }
  }
}
