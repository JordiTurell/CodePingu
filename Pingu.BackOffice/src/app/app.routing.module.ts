import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginGuard } from './guards/login.guard';
import { LayoutComponent } from './shared/layout/layout.component';


const routes: Routes = [  
  {
    path: 'dashboard', component: LayoutComponent, canActivate: [LoginGuard],
    children: [
      { path: 'perfil', component: PerfilComponent, canActivate: [LoginGuard] },
      { path: 'home', component: InicioComponent, canActivate: [LoginGuard] },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
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
