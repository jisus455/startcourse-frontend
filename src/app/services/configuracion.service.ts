import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  url = 'https://localhost:7173/api/config';

  constructor(private httpClient: HttpClient) { }
   
  GetConfig(){
    return this.httpClient.get(this.url);
   }

   PostConfig(Object: any){
    return this.httpClient.post(this.url, Object);
   }

   DeleteConfig(id:any){
    return this.httpClient.delete(this.url + "?id=" + id);
   }

   UpdateConfig(Object: any){
    return this.httpClient.put(this.url, Object);
   }


}
