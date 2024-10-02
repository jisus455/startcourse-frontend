import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  id: any;
  nombre: any;
  apellido: any;
  email: any;
  usuario: any;
  clave: any;
  estado: any;
  rol: any;

  UsuariosData: any;
  objectoDato:Object|undefined;

  constructor(
    private usuariosService: UsuariosService) {}

  ngOnInit(): void { //evento que se lanza cuando se ejecuta el componente
    this.GetUsuarios();
  }

  GetUsuarios() {
    this.usuariosService.GetUsuarios().subscribe(x => {
      this.UsuariosData = x;
    })
  }

  GetDatos(Item: any) {
    this.id = Item.Id;
    this.nombre = Item.Nombre;
    this.apellido = Item.Apellido;
    this.email = Item.Email;
    this.usuario = Item.Usuario;
    this.clave = Item.Clave;
    this.estado = Item.Estado;
    this.rol = Item.Rol;
  }

  UpdateUser() {
    let objecto = {
      Id: this.id,
      Nombre: this.nombre,
      Apellido: this.apellido,
      Email: this.email,
      Usuario: this.CifrarDatos(this.usuario),
      Clave: this.CifrarDatos(this.clave),
      Estado: this.estado,
      Rol: this.rol
    }

    this.usuariosService.UpdateUsuarios(objecto).subscribe(x => {
      this.GetUsuarios();
    });
  }

  DeleteUser() {
    this.usuariosService.DeleteUsuarios(this.id).subscribe(x => {
      this.GetUsuarios();
    });
  }

  PostUsuarios() {
    let objecto = {
      Id: this.id,
      Nombre: this.nombre,
      Apellido: this.apellido,
      Email: this.email,
      Usuario: this.CifrarDatos(this.usuario),
      Clave: this.CifrarDatos(this.clave),
      Estado: this.estado,
      Rol: this.rol
    }
    this.usuariosService.PostUsuarios(objecto).subscribe(x => {
      location.reload();
    });
  }

  CifrarDatos(Dato: any) {
    let codificado = btoa(Dato);
    return codificado;
  }

  DescifrarDatos(Dato: any) {
    let decodificado = atob(Dato);
    return decodificado;
  }


}
