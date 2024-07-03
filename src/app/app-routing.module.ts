import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VelasMoonshineComponent } from './velas-moonshine/velas-moonshine.component';
import { VelasAboutComponent } from './velas-about/velas-about.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'velas',
    pathMatch: 'full'
  },
  {
    path: 'velas',
    component: VelasMoonshineComponent
  },
  {
    path: 'about',
    component: VelasAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
