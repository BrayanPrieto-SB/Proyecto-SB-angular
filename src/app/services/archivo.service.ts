import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of,Observable } from 'rxjs';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  constructor(private httpClient: HttpClient) { }

  descargarReporte(nit,anio,mes,dur,dest,val_min): Observable<any>{
    return this.httpClient.get<any>(baseURL + 'archivo/'+nit+'/'+anio+'/'+mes+'/'+dur+'/'+dest+'/'+val_min+'/');
  }

  descargarReporte1(nit,anio,mes,dur,dest,val_min):Observable<any>{
    const httpOptions = {
      responseType: 'blob' as 'json',

      headers: new HttpHeaders({
        'Content-Type' : 'application/json',    
        Accept : 'application/json',
        observe : 'response'
      })
    };
      return this.httpClient.get(baseURL + 'archivo/'+nit+'/'+anio+'/'+mes+'/'+dur+'/'+dest+'/'+val_min+'/', httpOptions)
  }
}
