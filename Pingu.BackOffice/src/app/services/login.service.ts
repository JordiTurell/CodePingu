import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  header : HttpHeaders | null = null;

  constructor(private http: HttpClient, private router: Router) { 

  }

  login(user: string, pass: string) {
    let data: RequestItem<UserVM> = {
      item: {
        user: user,
        password: pass
      },
      token: 'a'
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
    let data: RequestItem<String> = {
      item: (this.token != null) ? this.token : '',
      token : (this.token != null) ? this.token : ''
    };

    if (data.item == undefined || data.item == '') {
      this.token = localStorage.getItem('token')
      if (this.token != null) {
        data.item = this.token;
      }
    }

    const header : HttpHeaders = this.setheader()
      this.http.post(`${url}/api/Login/ValidateToken`, data, { headers: header }).subscribe((res: any) => {
        if (res.status) {
          this.guardartoken(res.item)
        } else {
          this.logout();
        }
      },
      (error:any) => {
        console.log(error)
        this.logout()
      })
   }


  guardartoken(token: string) {
    this.token = token;
    this.autentificado = true;
    localStorage.setItem('token', token)
    this.setheader()
  }

  logout() {
    this.token = null;
    this.autentificado = false;
    this.router.navigate(['/login'])
    let t: string | null = localStorage.getItem('token')
    if (t != null) {
      localStorage.removeItem('token')
    }
    this.header = new HttpHeaders()
  }

  setheader(){
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    });
    return this.header
  }
}
