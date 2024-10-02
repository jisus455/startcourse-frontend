import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  titulo:any;
  categoria:any;
  descripcion:any;
  valoracion:any;
  precio:any;
  vendidos:any;
  imagen:any;

  constructor(private articulosService: ArticulosService){}

  ngOnInit(): void {
  }

  PostArticulos(){
    let object = {
      Id: 1,
      Titulo: this.titulo,
      Categoria: this.categoria,
      Descripcion: this.descripcion,
      Valoracion: this.valoracion,
      Precio: this.precio,
      Vendidos: this.vendidos,
      Imagen: this.imagen
    }

    this.articulosService.PostArticulos(object).subscribe(x => {
    });
  }





}
