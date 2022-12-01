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
import { ClasesComponent } from './components/clases/clases.component';
import { CreateEditClasesComponent } from './components/clases/create-edit-clases/create-edit-clases.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { BreadcumpComponent } from './shared/breadcump/breadcump.component';
//#endregion

//#region Modals
import { ModalLoadingComponent } from './shared/Modals/loading/loading.component';
//#endregion

//#region Angular Material

//#endregion

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    /* Pages */
    AppComponent,
    InicioComponent,
    LoginComponent,
    PerfilComponent,
    LayoutComponent,
    ClasesComponent,
    CreateEditClasesComponent,
    /* shared */
    SidebarComponent,
    TopbarComponent,
    BreadcumpComponent,
    /* Modals */
    ModalLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
