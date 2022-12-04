import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestList } from '../Models/RequestList';
import { environment } from "../../environment/environment";
import { LoginService } from './login.service';
import { LenguajesVM } from '../Models/LenguajesVM';
import { ResponseList } from '../Models/ResponseList';

const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class LenguajesServices {

  constructor(private loginservice: LoginService, private http: HttpClient, private router: Router) {
  }
  //No se usa pq lo usa el componente de tabla pasando directament la url
  //GetList() {
  //  let data: RequestList<LenguajesVM> = {
  //    customdata: [],
  //    token: (this.loginservice.token != null) ? this.loginservice.token : '',
  //    items: 25,
  //    page: 0
  //  };
  //  return new Promise(resolve => {
  //    this.http.post(`${url}/api/Clases/GetClases`, data).subscribe((res: any) => {
  //      if (res.status) {
  //        resolve(true)
  //      } else {
  //        resolve(false)
  //      }
  //      return res.list
  //    })
  //  })
  //}
}
