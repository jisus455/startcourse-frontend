import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any;
  estado: any;
  rol: any;


  constructor() { }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario')
    this.estado = localStorage.getItem('estado')
    this.rol = localStorage.getItem('rol')
  }


}
