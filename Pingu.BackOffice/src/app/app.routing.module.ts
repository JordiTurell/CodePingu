import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { CreateEditLenguajesComponent } from './components/lenguajes/create-edit-lenguajes/create-edit-lenguajes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginGuard } from './guards/login.guard';
import { LayoutComponent } from './shared/layout/layout.component';
import { ApuntesComponent } from './components/apuntes/apuntes.component';
import { ApuntesCrudComponent } from './components/apuntes/apuntescrud/apuntescrud.component';


const routes: Routes = [  
  {
    path: 'dashboard', component: LayoutComponent, canActivate: [LoginGuard],
    children: [
      { path: 'perfil', component: PerfilComponent, canActivate: [LoginGuard] },
      { path: 'home', component: InicioComponent, canActivate: [LoginGuard] },
      { path: 'lenguajes', component: LenguajesComponent, canActivate: [LoginGuard] },
      { path: 'lenguajes/create', component: CreateEditLenguajesComponent, canActivate: [LoginGuard] },
      { path: 'lenguajes/edit/:id', component: CreateEditLenguajesComponent, canActivate: [LoginGuard] },
      { path: 'apuntes', component: ApuntesComponent, canActivate: [LoginGuard] },
      { path: 'apuntes/create', component: ApuntesCrudComponent, canActivate: [LoginGuard] },
      { path: 'apuntes/edit/:id', component: ApuntesCrudComponent, canActivate: [LoginGuard] },
      { path: "", component:InicioComponent, pathMatch: "full" },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
