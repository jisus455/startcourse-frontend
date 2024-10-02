import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginaComponent } from './pages/pagina/pagina.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
//aca estan las rutas para rediriguirse dentro de la pagina 
const routes: Routes = [ 

  {path:"", 
  component:LoginComponent},

  {path:"inicio", 
  component:InicioComponent},
  
  {path:"config",
  component:AdministracionComponent,
  children:[
     {path:"usuarios",component:UsuariosComponent},
     {path:"pagina",component:PaginaComponent}
  ]},

  {path:"perfil",
  component:PerfilComponent},

  {path:"articulos",
  component:ArticulosComponent,
  children:[
   {path:"agregar",component:AgregarComponent},
   {path:"editar",component:EditarComponent}
  ]},


   




//path:"pagina",component:paginaComponent,
//path:"articulos",component:ArticulosComponent
  
  //}

 // {path:"administracion", component:AdministracionComponent},
 // {path:"articulos", component:ArticulosComponent},
//  {path:"usuarios", component:UsuariosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
