import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-velas-list',
  templateUrl: './velas-list.component.html',
  styleUrl: './velas-list.component.scss'
})
export class VelasListComponent {
 velas ={
   "name": "Frutos Rojos",
   "material": "Cera de soja",
   "price": "5000",
   "stock":"4",
   "image": "assets/img/frutosRojos.jpeg"
 }
 velas1 ={
  "name": "Lima Verbena",
  "material": "Cera de soja",
  "price": "5000",
  "stock":"4",
  "image": "assets/img/limaVerbena.jpeg"
}
velas2 ={
  "name": "Uva Mango",
  "material": "Cera de soja",
  "price": "5000",
  "stock":"4",
  "image": "assets/img/UvaMango.jpeg"
}

}
