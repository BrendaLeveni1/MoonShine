import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VelasListComponent } from './velas-list/velas-list.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    VelasListComponent,
    CarritoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
