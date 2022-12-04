import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LenguajesVM } from '../../../Models/LenguajesVM';
import { RequestItem } from '../../../Models/RequestItem';
import { ResponseItem } from '../../../Models/ResponseItem';
import { LoginService } from '../../../services/login.service';

declare var $: any;

@Component({
  selector: 'app-create-edit-clases',
  templateUrl: './create-edit-lenguajes.component.html',
  styleUrls: ['./create-edit-lenguajes.component.scss']
})
export class CreateEditLenguajesComponent {
  constructor(public loginservice: LoginService) {

  }

  async ngOnInit() {
    console.log('on init create lenguajes')
    await this.loginservice.validatetoken()
  }

  Submit(f: NgForm) {
    let data: RequestItem<LenguajesVM> = {
      item: {
        nombre: f.value.nombre,
        id: f.value.id
      },
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    }

  }

  Atras() {

  }

  Save() {
    $('form').submit()
  }
}
