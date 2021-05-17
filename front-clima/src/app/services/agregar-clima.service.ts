import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgregarClimaService {
  private myAppUrl = 'https://localhost:44306/';
  private myApiUrlCiudad = 'api/ciudad/';
  private myApiUrlCielo = 'api/cielo/';
  private myApiUrlclima = 'api/clima/';

  constructor(private http: HttpClient) {}

  //obtiene las ciudades
  getCiudades(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrlCiudad);
  }

  //obtiene el tipo de cielo por id
  getCiudadxId(id: number): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrlCiudad + id);
  }

  //obtiene el tipo de cielo
  getCielo(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrlCielo);
  }

  //obtiene el tipo de cielo por id
  getCieloxId(id: number): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrlCielo + id);
  }

  saveClima(clima: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrlclima, clima);
  }

  updateClima(id: number, clima: any) {
    return this.http.put(this.myAppUrl + this.myApiUrlclima + id, clima);
  }

  deleteClima(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrlclima + id);
  }
}
