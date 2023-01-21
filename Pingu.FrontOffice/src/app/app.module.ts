import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppRoutingModule } from './app.routing.module';


import {HomeComponent} from './components/home/home.component';
import {ProjectesComponent} from './components/projectes/projectes.component';
import {LinuxComponent} from './components/linux/linux.component';
import {SobremiComponent} from './components/sobremi/sobremi.component';
import {TabshorizontalComponent} from './components/shared/tabshorizontal/tabshorizontal.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
	HomeComponent,
	ProjectesComponent,
	LinuxComponent,
	SobremiComponent,
	TabshorizontalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
