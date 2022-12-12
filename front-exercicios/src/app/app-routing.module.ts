import { Exercicio1Component } from './component/exercicio1/exercicio1.component';
import { Exercicio2Component } from './component/exercicio2/exercicio2.component';
import { Exercicio3Component } from './component/exercicio3/exercicio3.component';
import { MenuComponent } from './component/menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio4Component } from './component/exercicio4/exercicio4.component';
import { Exercicio5Component } from './component/exercicio5/exercicio5.component';


const routes: Routes = [
  {
    path: 'exercicio5',
    component: Exercicio5Component
  },
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'exercicio1',
    component: Exercicio1Component
  },
  {
    path: 'exercicio2',
    component: Exercicio2Component
  },
  {
    path: 'exercicio3',
    component: Exercicio3Component
  },
  {
    path: 'exercicio4',
    component: Exercicio4Component
  },
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
