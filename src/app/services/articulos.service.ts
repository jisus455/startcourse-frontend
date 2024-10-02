import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url = 'https://localhost:7173/api/articulos';

  constructor(private httpClient: HttpClient) { }

  GetArticulos() {
    return this.httpClient.get(this.url);
  }






  GetArticulosByPrecioAsc() {
    var url1 = 'https://localhost:7173/api/articulos/byprecioasc';
    return this.httpClient.get(url1);
  }

  GetArticulosByPrecioDesc() {
    var url2 =  'https://localhost:7173/api/articulos/bypreciodesc';
    return this.httpClient.get(url2);
  }

  GetArticulosByVendidosDesc() {
    var url3 = 'https://localhost:7173/api/articulos/byvendidosdesc';
    return this.httpClient.get(url3);
  }

  GetArticulosByValoracionDesc() {
    var url4 =  'https://localhost:7173/api/articulos/byvaloraciondesc';
    return this.httpClient.get(url4);
  }

  GetArticulosByCategoria(categoria:any){
    var url5 = 'https://localhost:7173/api/articulos/bycategoria?categoria='+categoria;
    return this.httpClient.get(url5);
  }

  GetArticulosByTitulo(titulo:any){
    var url6 = 'https://localhost:7173/api/articulos/bytitulo?titulo='+titulo;
    return this.httpClient.get(url6);
  }




  PostArticulos(Object: any) {
    return this.httpClient.post(this.url, Object);
  }

  DeleteArticulos(id: any) {
    return this.httpClient.delete(this.url + "?id=" + id);
  }

  UpdateArticulos(Object: any) {
    return this.httpClient.put(this.url, Object);
  }
}
