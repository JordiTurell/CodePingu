import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';

//#region Components
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent} from './components/perfil/perfil.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { CreateEditLenguajesComponent } from './components/lenguajes/create-edit-lenguajes/create-edit-lenguajes.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { BreadcumpComponent } from './shared/breadcump/breadcump.component';
//#endregion

//#region Utils
import { TablasComponent } from './components/Utils/tablas/tablas.component';
//#endregion

//#region Modals
import { ModalLoadingComponent } from './shared/Modals/loading/loading.component';
//#endregion

//#region Angular Material
import { AgGridModule } from 'ag-grid-angular';
//#endregion

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    /* Pages */
    AppComponent,
    InicioComponent,
    LoginComponent,
    PerfilComponent,
    LayoutComponent,
    LenguajesComponent,
    CreateEditLenguajesComponent,
    /* shared */
    SidebarComponent,
    TopbarComponent,
    BreadcumpComponent,
    TablasComponent,
    /* Modals */
    ModalLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
