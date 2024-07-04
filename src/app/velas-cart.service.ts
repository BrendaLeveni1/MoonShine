import { Injectable } from '@angular/core';
import { Velas } from './velas-list/Velas';

@Injectable({
  providedIn: 'root'
})
export class VelasCartService {


shoopList : Velas [] = [];

constructor() { }

  addToCart(velas: Velas) {
    this.shoopList.push(velas)
  }







}
