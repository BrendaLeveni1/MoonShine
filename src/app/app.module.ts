import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VelasListComponent } from './velas-list/velas-list.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { VelasAboutComponent } from './velas-about/velas-about.component';
import { VelasMoonshineComponent } from './velas-moonshine/velas-moonshine.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { VelasContactoComponent } from './velas-contacto/velas-contacto.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VelasListComponent,
    CarritoComprasComponent,
    VelasAboutComponent,
    VelasMoonshineComponent,
    InputNumberComponent,
    VelasContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
