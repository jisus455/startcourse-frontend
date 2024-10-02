import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContainerComponent } from './components/container/container.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HeaderComponent } from './components/header/header.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginaComponent } from './pages/pagina/pagina.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoadingComponent } from './components/loading/loading.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    ContainerComponent,
    AdministracionComponent,
    ArticulosComponent,
    UsuariosComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PaginaComponent,
    PerfilComponent,
    LoadingComponent,
    InicioComponent,
    AgregarComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



