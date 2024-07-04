import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Velas } from '../velas-list/Velas';
const URL = 'https://5f87805549ccbb00161775ca.mockapi.io/api/v1/beers';

@Injectable({
  providedIn: 'root'
})
export class VelasDataService {

  constructor(private http : HttpClient) { }

public getAll() : Observable<Velas[]>{
  return this.http.get<Velas[]>(URL)
  .pipe(
    tap( (velas :Velas[]) => velas.forEach(velas => velas.quantity = 0))
  );
}
  


}
