import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Velas } from '../velas-list/Velas';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent implements OnInit{

  
  constructor(){}
  @Input() quantity !: number;
  @Input() max !: number;
  @Output() quantityChange : EventEmitter<number> =new EventEmitter<number>();
    
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  upQuantity() {
    if(this.quantity <this.max){
  
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    
  }
  dowQuantity() {
    if(this.quantity >0){
  
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  
  onChangeQuantity(event: any): void {
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value, 10);
  
    // Prevent non-numeric input
    if (isNaN(value)) {
      input.value = this.quantity.toString();
      return;
    }
  
    // Prevent exceeding stock
    if (value >this.max) {
      input.value = this.max.toString();
      value = this.max;
    }
  
    // Update quantity
    this.quantity = value;
    this.quantityChange.emit(this.quantity);
  }
}
