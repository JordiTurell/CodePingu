import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { environment } from '../../environment/environment';
import { RequestItem } from '../Models/RequestItem';
import { Usuarios } from '../Models/Usuarios/Usuarios';
import { LoginService } from './login.service';

const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private loginservice: LoginService, private http: HttpClient, private router: Router) {
  }

  Edit(item: Usuarios) {
    let data: RequestItem<Usuarios> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/Usuarios/Edit`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(true)
        } else {
          resolve(false)
        }
        this.router.navigate(['/dashboard/usuarios'])
      })
    })
  }

  Delete(item: Usuarios) {
    let data: RequestItem<Usuarios> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/Usuarios/Delete`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(true)
        } else {
          resolve(false)
        }
        this.router.navigate(['/dashboard/usuarios'])
      })
    })
  }

  async GetItem(item: Usuarios) {
    let data: RequestItem<Usuarios> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/Usuarios/GetItem`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(res)
        } else {
          resolve(false)
        }
      })
    })
  }

  async Get(item: Usuarios) {
    let data: RequestItem<Usuarios> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/Usuarios/GetUsuarios`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(res)
        } else {
          resolve(false)
        }
      })
    })
  }
}
