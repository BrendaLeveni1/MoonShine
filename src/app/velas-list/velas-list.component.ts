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
  //elimino y consumo desde la api
  velas : Velas[] = [];

}


