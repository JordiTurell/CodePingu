import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ApuntesVM } from '../../../Models/ApuntesVM/ApuntesVM';
import { RequestItem } from '../../../Models/RequestItem';
import { ResponseItem } from '../../../Models/ResponseItem';
import { ApuntesService } from '../../../services/apuntes.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-apuntescrud',
  templateUrl: './apuntescrud.component.html',
  styleUrls: ['./apuntescrud.component.scss']
})
export class ApuntesCrudComponent implements OnInit {

  apuntesform: FormGroup;
  idEdit: string = '';
  EditMode: boolean = false

  constructor(public loginservice: LoginService, private apuntesservice: ApuntesService, private router: ActivatedRoute, private nav: Router, private fb: FormBuilder) {
    this.apuntesform = this.fb.group({
      id: [''],
      titulo: ['', Validators.required],
      post: ['', Validators.required],
      idLenguaje: ['', Validators.required]
    })
  }
    async ngOnInit() {
      await this.loginservice.validatetoken()
      this.router.params.subscribe((params: Params) => {
        this.idEdit = params['id']
        this.EditMode = params['id'] != null
      })

      if (this.EditMode) {
        let data: RequestItem<ApuntesVM> = {
          item: {
            titulo: this.apuntesform.controls['titulo'].value,
            id: Guid.parse(this.idEdit).toJSON().value,
            post: this.apuntesform.controls['post'].value,
            idLenguajes: this.apuntesform.controls['idLenguaje'].value,
            avilitado: false,
            fecha: new Date(),
            puntuacion: 0,
            visitas: 0
          },
          token: (this.loginservice.token != null) ? this.loginservice.token : '',
        }
        const itemEdit: ResponseItem<ApuntesVM> = await this.apuntesservice.Get(data.item) as ResponseItem<ApuntesVM>
        try {
          this.apuntesform.get('tiutlo')?.setValue(itemEdit.item.titulo)
          this.apuntesform.get('post')?.setValue(itemEdit.item.post)
          this.apuntesform.get('idLenguajes')?.setValue(itemEdit.item.idLenguajes)
          this.apuntesform.get('id')?.setValue(itemEdit.item.id)
        } catch (ex) {
          this.nav.navigate(['/dashboard/apuntes'])
        }
      }
    }

  get f() { return this.apuntesform.controls }

  Atras() {
    window.history.back()
  }

  Save() {
    if (this.apuntesform.valid) {
      let data: RequestItem<ApuntesVM> = {
        item: {
          titulo: this.apuntesform.controls['titulo'].value,
          id: Guid.create().toJSON().value,
          post: this.apuntesform.controls['post'].value,
          idLenguajes: this.apuntesform.controls['idLenguaje'].value,
          avilitado: false,
          fecha: new Date(),
          puntuacion: 0,
          visitas: 0
        },
        token: (this.loginservice.token != null) ? this.loginservice.token : '',
      }
      if (!this.EditMode) {
        this.apuntesservice.Create(data.item)
      } else {
        data.item.id = Guid.parse(this.idEdit).toJSON().value
        this.apuntesservice.Edit(data.item)
      }
    }
  }
}
