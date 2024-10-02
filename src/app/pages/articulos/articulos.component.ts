import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
import { RickService } from 'src/app/services/rick.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  id:any;
  titulo:any;
  categoria:any;
  descripcion:any;
  valoracion:any;
  vendidos:any;
  precio:any;
  imagen:any;

  ArticulosData:any;
  busqueda:any;

  constructor(private articulosService:ArticulosService){}

  ngOnInit(): void {
    this.GetArticulos();
  }

  GetArticulos() {
    this.articulosService.GetArticulos().subscribe(x => {
      this.ArticulosData = x;
    });
  }

  GetArticulosByTitulo() {
    this.articulosService.GetArticulosByTitulo(this.busqueda).subscribe(x => {
      this.ArticulosData = x;
    });
  }

  PostArticulos(){
    let object = {
      Id: null,
      Titulo: this.titulo,
      Categoria: this.categoria,
      Descripcion: this.descripcion,
      Valoracion: this.valoracion,
      Precio: this.precio,
      Vendidos: this.vendidos,
      Imagen: this.imagen
    }

    this.articulosService.PostArticulos(object).subscribe(x => {
      location.reload();
    });
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

    this.articulosService.UpdateArticulos(object).subscribe(x => {
      location.reload();
    });
  }

  DeleteArticulos() {
    this.articulosService.DeleteArticulos(this.id).subscribe(x => {
      this.GetArticulos();
    });
  }

  Eliminar(object:any){
    this.id = object.Id;
    this.titulo = object.Titulo;
  }

  Editar(object:any){
    localStorage.clear();
    
    localStorage.setItem('id', object.Id);
    localStorage.setItem('titulo', object.Titulo);
    localStorage.setItem('categoria', object.Categoria);
    localStorage.setItem('descripcion', object.Descripcion);
    localStorage.setItem('valoracion', object.Valoracion)
    localStorage.setItem('precio', object.Precio);
    localStorage.setItem('vendidos', object.Vendidos);
    localStorage.setItem('imagen', object.Imagen);
  }


}
