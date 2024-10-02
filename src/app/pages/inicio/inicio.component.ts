import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  id: Int32Array | undefined;
  titulo: string | undefined;
  descripcion: string | undefined;
  valorados: Int32Array | undefined;
  vendidos: Int32Array | undefined;
  imagen: string | undefined;

  ArticulosData: any;
  busqueda:any;

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.GetArticulos();
  }

  GetArticulos() {
    this.articulosService.GetArticulos().subscribe(x => {
      this.ArticulosData = x;
    })
  }

  GetArticulosByPrecioAsc() {
    this.articulosService.GetArticulosByPrecioAsc().subscribe(x => {
      this.ArticulosData = x;
    })
  }

  GetArticulosByPrecioDesc() {
    this.articulosService.GetArticulosByPrecioDesc().subscribe(x => {
      this.ArticulosData = x;
    })
  }

  GetArticulosByVendidosDesc() {
    this.articulosService.GetArticulosByVendidosDesc().subscribe(x => {
      this.ArticulosData = x;
    })
  }

  GetArticulosByValoracionDesc() {
    this.articulosService.GetArticulosByValoracionDesc().subscribe(x => {
      this.ArticulosData = x;
    })
  }

  GetArticulosByTitulo() {
    this.articulosService.GetArticulosByTitulo(this.busqueda).subscribe(x => {
      this.ArticulosData = x;
    })
  }


}
