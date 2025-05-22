import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanosService {
  private url = 'assets/planos.json';

  constructor(private http: HttpClient) {}

getPlanos(): Observable<any[]> {
  return this.http.get<any[]>('/assets/planos.json');
}
}


