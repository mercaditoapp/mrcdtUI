import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserXhr, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';


import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RecetaComponent } from './receta/receta.component';
import { ManagerRecetaComponent } from './manager-receta/manager-receta.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { ProductosService } from './productos.service';
import { PrecioMinimoVentaService } from './precio-minimo-venta.service';
import { PrecioBaseService } from './precio-base.service';
import { UnidadService } from './unidad.service';
import { EscalarService } from './escalar.service';

import { RecetaService } from './receta.service';
import { ProcedimientoService } from './procedimiento.service';
import { IngredienteProcedimientoService } from './ingrediente-procedimiento.service';
import { PasoService } from './paso.service';

import { EquivalenciaService } from './equivalencia.service';
import { ProductoEquivalenciaService } from './producto-equivalencia.service';

import { RecetasClienteComponent } from './recetas-cliente/recetas-cliente.component';
import { RecetaClienteComponent } from './receta-cliente/receta-cliente.component';
import { PedidoClienteComponent } from './pedido-cliente/pedido-cliente.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { CatalogosComponent } from './catalogos/catalogos.component';


const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'receta/:nombreUrl', component: RecetaComponent },
  { path: 'manager/receta/:nombreUrl', component: ManagerRecetaComponent },
  { path: 'recetas-cliente', component: RecetasClienteComponent },
  { path: 'receta-cliente', component: RecetaClienteComponent },
  { path: 'pedido-cliente', component: PedidoClienteComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent },
  { path: 'catalogos', component: CatalogosComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    RecetasComponent,
    RecetaComponent,
    ManagerRecetaComponent,
    LandingPageComponent,
    RecetasClienteComponent,
    RecetaClienteComponent,
    PedidoClienteComponent,
    RegistroUsuarioComponent,
    CatalogosComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    NgProgressModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    ProductosService,
    PrecioMinimoVentaService,
    PrecioBaseService,
    UnidadService,
    RecetaService,
    ProcedimientoService,
    IngredienteProcedimientoService,
    EscalarService,
    EquivalenciaService,
    ProductoEquivalenciaService,
    PasoService,
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
