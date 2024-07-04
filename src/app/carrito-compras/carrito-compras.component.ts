import { Component } from '@angular/core';
import { VelasCartService } from '../velas-cart.service';
import { Observable, observable } from 'rxjs';
import { Velas } from '../velas-list/Velas';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.scss'
})
export class CarritoComprasComponent {
  shoopList$: Observable<Velas[]>;


  constructor(private cart : VelasCartService){
  this.shoopList$ = cart.shoopList.asObservable();
  }

  // onQuantityChange(event: any, vela: Velas) { Arreglar
  //   const newQuantity = event.target.value;
  //   const difference = newQuantity - vela.quantity;

  //   if (difference > 0) {
  //     for (let i = 0; i < difference; i++) {
  //       this.cart.addToCart(vela);
  //     }
  //   } else {
  //     for (let i = 0; i < -difference; i++) {
  //       this.cart.removeFromCart(vela);
  //     }
  //   }
  // }
}