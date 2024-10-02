import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'https://localhost:7173/api/users';

  constructor(private httpClient: HttpClient) { }
   
  GetUsuarios(){
    return this.httpClient.get(this.url);
   }

   PostUsuarios(Object: any){
    return this.httpClient.post(this.url, Object);
   }

   DeleteUsuarios(id:any){
    return this.httpClient.delete(this.url + "?id=" + id);
   }

   UpdateUsuarios(Object: any){
    return this.httpClient.put(this.url, Object);
   }

   GetLogin(Object:any) {
    var url1 = "https://localhost:7173/api/users/bylogin";
    return this.httpClient.post(url1, Object);
  }



}
