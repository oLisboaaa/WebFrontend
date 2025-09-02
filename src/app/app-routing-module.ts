import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Calculadora } from './calculadora/calculadora';
import { ListarCliente } from './listar-cliente/listar-cliente';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Telapai } from './telapai/telapai';
import { Telafilho1 } from './telafilho1/telafilho1';
import { Telafilho2 } from './telafilho2/telafilho2';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'calculadora', component: Calculadora },
  { path: 'listar-cliente', component: ListarCliente },
  {
    path: 'tela-pai', component: Telapai, children: [
      { path: 'tela-filho1', component: Telafilho1 },
      { path: 'tela-filho2', component: Telafilho2 }
    ]
  },
  { path: '**', component: Pagenotfound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
