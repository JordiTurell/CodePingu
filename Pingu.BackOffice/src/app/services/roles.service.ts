import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { environment } from '../../environment/environment';
import { RequestItem } from '../Models/RequestItem';
import { RolesVM } from '../Models/RolesVM/RolesVM';
import { LoginService } from './login.service';

const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private loginservice: LoginService, private http: HttpClient, private router: Router) {
  }

  Create(item: RolesVM) {
    item.id = Guid.create()
    let data: RequestItem<RolesVM> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/Roles/Create`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(true)
        } else {
          resolve(false)
        }
        this.router.navigate(['/dashboard/roles'])
      })
    })
  }

  Edit(item: RolesVM) {
    let data: RequestItem<RolesVM> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/Roles/Edit`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(true)
        } else {
          resolve(false)
        }
        this.router.navigate(['/dashboard/roles'])
      })
    })
  }

  Delete(item: RolesVM) {
    let data: RequestItem<RolesVM> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/Roles/Delete`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(true)
        } else {
          resolve(false)
        }
        this.router.navigate(['/dashboard/roles'])
      })
    })
  }

  async GetItem(item: RolesVM) {
    let data: RequestItem<RolesVM> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/Roles/GetItem`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(res)
        } else {
          resolve(false)
        }
      })
    })
  }

  async Get(item: RolesVM) {
    let data: RequestItem<RolesVM> = {
      item: item,
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/roles/GetRoles`, data).subscribe((res: any) => {
        if (res.status) {
          resolve(res)
        } else {
          resolve(false)
        }
      })
    })
  }
}
