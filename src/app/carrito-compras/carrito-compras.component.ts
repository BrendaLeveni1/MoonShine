import { Component } from '@angular/core';
import { VelasCartService } from '../velas-cart.service';
import { observable } from 'rxjs';
import { Velas } from '../velas-list/Velas';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.scss'
})
export class CarritoComprasComponent {
  shoopList : Velas[] =[];
  constructor(private cart : VelasCartService){
   cart.shoopList.subscribe( observable => this.shoopList = observable);
  }
}