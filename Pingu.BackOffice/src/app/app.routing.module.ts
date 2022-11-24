import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { LayoutComponent } from './shared/layout/layout.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: InicioComponent, canActivate: [ LoginGuard ] },
  { path: 'content', component: LayoutComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
