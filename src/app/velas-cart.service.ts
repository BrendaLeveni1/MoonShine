import { Injectable } from '@angular/core';
import { Velas } from './velas-list/Velas';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VelasCartService {
  private _shoopList : Velas [] = [];
  shoopList  : BehaviorSubject<Velas [] > = new BehaviorSubject(this._shoopList);


constructor() { }

  addToCart(velas: Velas) {
   let item : Velas = this._shoopList.find(v1=> v1.name == velas.name)!;
   if(!item){
     this._shoopList.push({... velas}) ;
   }
   else{
    item.quantity += velas.quantity;
   }
   this.shoopList.next(this._shoopList);//equivalente al emit
  }







}
