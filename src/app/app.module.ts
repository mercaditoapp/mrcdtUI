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

import { ProductosService } from './productos.service';
import { PrecioMinimoVentaService } from './precio-minimo-venta.service';
import { UnidadService } from './unidad.service';
import { RecetaService } from './receta.service';
import { ProcedimientoService } from './procedimiento.service';
import { IngredienteProcedimientoService } from './ingrediente-procedimiento.service';
import { PasoService } from './paso.service';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'receta/:nombreUrl', component: RecetaComponent },
  { path: 'manager/receta/:nombreUrl', component: ManagerRecetaComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    RecetasComponent,
    RecetaComponent,
    ManagerRecetaComponent,
    LandingPageComponent
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
    UnidadService,
    RecetaService,
    ProcedimientoService,
    IngredienteProcedimientoService,
    PasoService,
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
