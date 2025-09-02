import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuSuperior } from './menu-superior/menu-superior';
import { Noticia } from './noticia/noticia';
import { Destaque } from './destaque/destaque';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarCliente } from './listar-cliente/listar-cliente';

import { Calculadora } from './calculadora/calculadora';
import { Home } from './home/home';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Telapai } from './telapai/telapai';
import { Telafilho1 } from './telafilho1/telafilho1';
import { Telafilho2 } from './telafilho2/telafilho2';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
    Noticia,
    Destaque,
    ListarCliente,
    Calculadora,
    Home,
    Pagenotfound,
    Telapai,
    Telafilho1,
    Telafilho2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
