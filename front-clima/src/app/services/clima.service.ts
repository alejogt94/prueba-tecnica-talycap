import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  private myAppUrl = 'https://localhost:44306/';
  private myApiUrlCiudad = 'api/clima/';

  constructor(private http: HttpClient) {}

  //obtiene las ciudades
  getClima(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrlCiudad);
  }

  deleteClima(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrlCiudad + id);
  }
}
