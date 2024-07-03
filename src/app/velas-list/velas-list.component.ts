import { Component, OnInit } from '@angular/core';
import { Velas } from './Velas';

@Component({
  selector: 'app-velas-list',
  templateUrl: './velas-list.component.html',
  styleUrl: './velas-list.component.scss'
})
export class VelasListComponent {
 velas : Velas[] = [
  {
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

upQuantity(velas : Velas) {
  if(velas.quantity <velas.stock){

    velas.quantity++;
  }
}
dowQuantity(velas : Velas) {
  if(velas.quantity >0){

    velas.quantity--;
  }
}

onChangeQuantity(event: any, velas: Velas): void {
  const input = event.target as HTMLInputElement;
  let value = parseInt(input.value, 10);

  // Prevent non-numeric input
  if (isNaN(value)) {
    input.value = velas.quantity.toString();
    return;
  }

  // Prevent exceeding stock
  if (value > velas.stock) {
    input.value = velas.stock.toString();
    value = velas.stock;
  }

  // Update quantity
  velas.quantity = value;
}
}


