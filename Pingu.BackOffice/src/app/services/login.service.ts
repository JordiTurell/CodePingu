import { ENVIRONMENT_INITIALIZER, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../src/environment/environment";
import { RequestItem } from "../Models/RequestItem";
import { UserVM } from "../Models/UserVM";
import { Router } from "@angular/router";

const url = environment.api;

@Injectable({
  providedIn: "root"
})

export class LoginService {

  token: string | null = null;
  autentificado: boolean = false;

  constructor(private http: HttpClient, private router : Router) { }

  login(user: string, pass: string) {
    let data: RequestItem<UserVM> = {
      item: {
        user: user,
        password: pass
      }
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/Login/Acceso`, data).subscribe((res: any) => {
        if (res.status) {
          this.guardartoken(res.item.token)
          resolve(true)
        } else {
          resolve(false)
          this.logout();
        }
      })
    })
  }

  validatetoken() {
    this.token = localStorage.getItem('token')

    let data: RequestItem<String> = {
      item: (this.token != null) ? this.token : ''
    };
    return new Promise(resolve => {
      this.http.post(`${url}/api/Login/ValidateToken`, data).subscribe((res: any) => {
        if (res.status) {
          this.guardartoken(res.item.token)
          resolve(true)
        } else {
          resolve(false)
          this.logout();
        }
      })
    })
  }

  guardartoken(token: string) {
    this.token = token;
    this.autentificado = true;
    localStorage.setItem("token", token)
    this.router.navigateByUrl('home')
  }

  logout() {
    this.token = null;
    this.autentificado = false;
    this.router.navigateByUrl('login')
  }
}
