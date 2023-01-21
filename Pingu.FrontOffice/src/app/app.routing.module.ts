
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LinuxComponent} from './components/linux/linux.component';
import {ProjectesComponent} from './components/projectes/projectes.component';
import {SobremiComponent} from './components/sobremi/sobremi.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'projectes', component: ProjectesComponent, pathMatch: 'full'},
  { path: 'linux', component: LinuxComponent, pathMatch: 'full' },
  { path: 'sobremi', component: SobremiComponent, pathMatch: 'full', },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
