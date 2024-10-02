import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id:any;
  titulo:any;
  categoria:any;
  descripcion:any;
  valoracion:any;
  precio:any;
  vendidos:any;
  imagen:any;

  constructor(private articulosService: ArticulosService){}

  ngOnInit(): void {
    this.GetDatos();
  }

  UpdateArticulos(){
    let object = {
      Id: this.id,
      Titulo: this.titulo,
      Categoria: this.categoria,
      Descripcion: this.descripcion,
      Valoracion: this.valoracion,
      Precio: this.precio,
      Vendidos: this.vendidos,
      Imagen: this.imagen
    }

    console.log(object)

    this.articulosService.UpdateArticulos(object).subscribe(x => {
    });
  }

  GetDatos(){
    this.id = localStorage.getItem('id');
    this.titulo = localStorage.getItem('titulo');
    this.categoria = localStorage.getItem('categoria');
    this.descripcion = localStorage.getItem('descripcion');
    this.valoracion = localStorage.getItem('valoracion');
    this.precio = localStorage.getItem('precio');
    this.vendidos = localStorage.getItem('vendidos');
    this.imagen = localStorage.getItem('imagen');
  }
}
