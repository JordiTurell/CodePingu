import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { environment } from '../../environment/environment';
import { ApuntesVM } from '../Models/ApuntesVM/ApuntesVM';
import { RequestItem } from '../Models/RequestItem';
import { LoginService } from './login.service';

const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class ApuntesService {

  constructor(private loginservice: LoginService, private http: HttpClient, private router: Router) {
  }

  Create(item: ApuntesVM) {
    item.id = Guid.create().toJSON().value
    let data: RequestItem<ApuntesVM> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/apuntes/SetApuntes`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(true)
        } else {
          resolve(false)
        }
        this.router.navigate(['/dashboard/apuntes'])
      })
    })
  }

  Edit(item: ApuntesVM) {
    let data: RequestItem<ApuntesVM> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/apuntes/EditApuntes`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(true)
        } else {
          resolve(false)
        }
        this.router.navigate(['/dashboard/apuntes'])
      })
    })
  }

  Delete(item: ApuntesVM) {
    let data: RequestItem<ApuntesVM> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/apuntes/DeleteApuntes`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(true)
        } else {
          resolve(false)
        }
        this.router.navigate(['/dashboard/apuntes'])
      })
    })
  }

  async Get(item: ApuntesVM) {
    let data: RequestItem<ApuntesVM> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/apuntes/GetItem`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(res)
        } else {
          resolve(false)
        }
      })
    })
  }
}
