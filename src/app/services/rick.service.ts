import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickService {

  constructor(private httpClient:HttpClient) {}

  url = "https://rickandmortyapi.com/api/character";

  GetCharacters(){
    return this.httpClient.get(this.url);
  }

  
}
