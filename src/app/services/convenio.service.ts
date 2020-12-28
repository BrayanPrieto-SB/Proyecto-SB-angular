import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of,Observable } from 'rxjs';
import { Convenio } from '../shared/convenio';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {

  constructor(private httpClient: HttpClient) { }
  
  listarConvenios(): Observable<Convenio[]>{
    return this.httpClient.get<Convenio[]>(baseURL + 'conv/')
  }


  crearConvenio(convenio: Convenio ): Observable<Object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

      return this.httpClient.post(baseURL + 'conv/', convenio, httpOptions)
  }
}
