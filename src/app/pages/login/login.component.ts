import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  UsuariosData: any;
  usuario: any;
  clave: any;
  mensaje: any;
  DataLogin: any;

  constructor(private usuariosService: UsuariosService, private router: Router,) { }

  ngOnInit(): void {
    localStorage.clear();
    this.GetUsuarios();
  }

  GetUsuarios() {
    this.usuariosService.GetUsuarios().subscribe(x => {
      this.UsuariosData = x;
    })
  }

  CifrarDatos(Dato: any) {
    let codificado = btoa(Dato);
    return codificado;
  }

  DescifrarDatos(Dato: any) {
    let decodificado = atob(Dato);
    return decodificado;
  }

  Ingresar() {
    let user = this.CifrarDatos(this.usuario);
    let pass = this.CifrarDatos(this.clave);

    if (this.usuario === undefined || this.clave === undefined ||
      this.usuario === "" || this.clave === "") {
      this.mensaje = "Es obligatorio completar los datos."
    } else {

      let object = {
        Usuario: user,
        Password: pass
      }

      this.usuariosService.GetLogin(object).subscribe(x => {
        this.DataLogin = x;
        console.log(this.DataLogin)
      });

      if (this.DataLogin[0] === "" || this.DataLogin[0] === undefined) {
        this.mensaje = "Los datos ingresados son incorrectos";
      } else {

        let resultado = this.DataLogin[0].Estado;

        localStorage.setItem('estado', resultado);
        localStorage.setItem('rol', this.DataLogin[0].Rol);

        if (resultado === "Habilitado") {
          localStorage.setItem('usuario', this.usuario);
          this.router.navigate(['/inicio']);
        } else {
          this.mensaje = "El usuario se encuentra desactivado"
        }

      }


    }
  }

}
