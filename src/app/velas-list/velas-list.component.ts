import { Component, OnInit } from '@angular/core';
import { Velas } from './Velas';
import { VelasCartService } from '../services/velas-cart.service';
import { VelasDataService } from '../services/velas-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-velas-list',
  templateUrl: './velas-list.component.html',
  styleUrl: './velas-list.component.scss'
})
export class VelasListComponent {
  private subscription: Subscription | undefined;

  constructor(private cart : VelasCartService , private velasDataService:VelasDataService){
    
  }
  
  ngOninit(){
    this.subscription = this.velasDataService.getAll()
  .subscribe(velas  => this.velas = velas );
  }
  
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
  velas : Velas[] = [
    {// sacar esto cuando pueda consumir la api
    name: 'Frutos Rojos',
    material: 'Cera de soja',
    price: 5000,
    stock: 4,
    image: 'assets/img/frutosRojos.jpeg',
    clearance: false,
    quantity : 0,
 },
 {
  name: 'Lima Verbena',
  material: 'Cera de soja',
  price: 5000,
  stock: 4,
  image: 'assets/img/limaVerbena.jpeg',
  clearance: true,
  quantity : 0,
},
{
  name: 'Uva Mango',
  material: 'Cera de soja',
  price: 5000,
  stock : 0,
  image: 'assets/img/UvaMango.jpeg',
  clearance: false,
  quantity : 0,
}
]
 addToCart (velas: any): void {
  this.cart.addToCart(velas);
  velas.stock -= velas.quantity;
  velas.quantity =0;
 }

   

}


