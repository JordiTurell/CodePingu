import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';

import { environment } from "../../environment/environment";
import { LenguajesVM } from '../Models/LenguajesVM/LenguajesVM';
import { RequestItem } from '../Models/RequestItem';
import { ResponseItem } from '../Models/ResponseItem';
import { LoginService } from './login.service';

const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class LenguajesServices {

  constructor(private loginservice: LoginService, private http: HttpClient, private router: Router) {
  }

  Create(item: LenguajesVM) {
    item.id = Guid.create().toJSON().value
     let data: RequestItem<LenguajesVM> = {
        item: item,
        token: (this.loginservice.token != null) ? this.loginservice.token : '',
     };
     return new Promise(resolve => {
        this.http.post(`${url}/api/Clases/SetClases`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(true)
        } else {
          resolve(false)
        }
          this.router.navigate(['/dashboard/lenguajes'])
      })
     })
  }

  Edit(item: LenguajesVM) {
    let data: RequestItem<LenguajesVM> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/Clases/EditClases`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(true)
        } else {
          resolve(false)
        }
        this.router.navigate(['/dashboard/lenguajes'])
      })
    })
  }

  Delete(item: LenguajesVM){
    let data: RequestItem<LenguajesVM> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/Clases/DeleteClases`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(true)
        } else {
          resolve(false)
        }
        this.router.navigate(['/dashboard/lenguajes'])
      })
    })
  }

  async Get(item: LenguajesVM){
    let data: RequestItem<LenguajesVM> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/Clases/GetItem`, data).subscribe((res: any) => {
        if (res.status) {
            resolve(res)
        } else {
          resolve(false)
        }
      })
    })
  }
}
