import { Component, Input, OnInit } from '@angular/core';
import { Velas } from '../velas-list/Velas';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent implements OnInit{

  
  constructor(){}
  @Input()
  velas!: Velas;

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
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
