import { Component } from '@angular/core';
import { VelasCartService } from '../velas-cart.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.scss'
})
export class CarritoComprasComponent {

  constructor(private cart : VelasCartService){
  
  }
}