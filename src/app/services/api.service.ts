import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  
  getPersonajes(): Observable<any>{
    const URL ="https://rickandmortyapi.com/api/character";
    return this.http.get(URL)
  
  }

  getPersonaje(id: any): Observable<any>{
    const URL ="https://rickandmortyapi.com/api/character/"+id;
    return this.http.get(URL)
  
  }
}
