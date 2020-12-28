import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';
import { Resumen } from '../shared/resumen';



@Injectable({
  providedIn: 'root'
})
export class ResumenService {

  constructor(private httpClient: HttpClient) { }
  
  mostrarResumen(): Observable<Resumen[]>{

    return this.httpClient.get<Resumen[]>(baseURL + 'resumen/')
  }


}
