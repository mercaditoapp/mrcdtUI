import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { RecetaService } from '../receta.service';
import { ProductosService } from '../productos.service';
import { ProcedimientoService } from '../procedimiento.service';
import { IngredienteProcedimientoService } from '../ingrediente-procedimiento.service';
import { PasoService } from '../paso.service';
import { UnidadService } from '../unidad.service';

import { Receta } from '../receta';
import { Producto } from '../producto';
import { Procedimiento } from '../procedimiento';
import { Paso } from '../paso';
import { Unidad } from '../unidad';
import { IngredienteProcedimiento } from '../ingrediente-procedimiento';
import { IngredienteReceta } from '../ingrediente-receta';

@Component({
  selector: 'app-manager-receta',
  templateUrl: './manager-receta.component.html',
  styleUrls: ['./manager-receta.component.css']
})
export class ManagerRecetaComponent implements OnInit {
  receta = new Receta();
  nuevoProcedimiento = new Procedimiento();
  nuevoPaso = new Paso();
  productoBusqueda = new Producto();
  productosBusqueda: Producto[];
  ingredienteProcedimiento = new IngredienteProcedimiento();
  unidades: Unidad[];

  constructor(
    private recetaService: RecetaService,
    private productosService: ProductosService,
    private procedimientoService: ProcedimientoService,
    private ingredienteProcedimientoService: IngredienteProcedimientoService,
    private pasoService: PasoService,
    private unidadService: UnidadService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {

    console.log(this.route.snapshot.paramMap.get('nombreUrl'));
    console.log(this.route.snapshot.paramMap.get('nombreUrl'));

    this.getReceta();
    this.getUnidades();
  }

  getReceta() {
    this.recetaService.getReceta(this.route.snapshot.paramMap.get('nombreUrl'))
      .subscribe(
      receta => {
        console.log(receta);
        this.receta = receta;
      }
      );
  }

  getUnidades() {
    this.unidadService.getAll()
      .subscribe(
      unidades => this.unidades = unidades
      );
  }


  insertProcedimiento(procedimiento: Procedimiento) {
    this.procedimientoService.insert(procedimiento)
      .subscribe(
      procedimiento => {
        console.dir(procedimiento);
        this.nuevoProcedimiento = new Procedimiento();
        this.getReceta();
      }
      );
  }

  agregarProcedimiento() {
    this.nuevoProcedimiento.receta.idx = this.receta.idx;

    console.dir(this.nuevoProcedimiento);

    this.insertProcedimiento(this.nuevoProcedimiento);
  }


  insertPaso(paso: Paso) {
    this.pasoService.insert(paso)
      .subscribe(
      paso => {
        console.dir(paso);
        this.nuevoPaso = new Paso();
        this.getReceta();
      }
      );
  }

  agregarPaso() {
    console.dir(this.nuevoPaso);

    this.insertPaso(this.nuevoPaso);
  }

  buscarProducto() {
    if (this.productoBusqueda.nombre.length > 0) {
      this.productosService.findByNombre(this.productoBusqueda)
        .subscribe(
        productosBusqueda => {
          this.productosBusqueda = productosBusqueda;
        }
        );
    } else {
      this.productoBusqueda = new Producto();
      this.productosBusqueda = new Array();
    }

  }

  seleccionarProducto($event: any) {
    console.dir($event);

    this.ingredienteProcedimiento.producto = $event;
  }

  eliminarIngredienteProcedimiento($event: any) {
    console.dir($event);

    var ingredienteProcedimiento: IngredienteProcedimiento = $event;

    this.ingredienteProcedimientoService.deleteByIdx(ingredienteProcedimiento.idx)
      .subscribe(
      ingredienteProcedimiento => {
        console.dir(ingredienteProcedimiento);
        this.actualizarIngredientesReceta();
      }
      );
  }


  eliminarReceta($event: any) {
    console.dir($event);

    var receta: Receta = $event;

    this.recetaService.deleteByIdx(receta.idx)
      .subscribe(
      receta => {
        console.dir(receta);
        this.router.navigate(['/recetas']);
      }
      );
  }

  agregarIngredienteProcedimiento() {
    console.dir(this.ingredienteProcedimiento);
    this.insertIngredienteProcedimiento(this.ingredienteProcedimiento);
  }

  actualizarIngredientesReceta() {
    this.recetaService.actualizarIngredientesReceta(this.receta.idx)
      .subscribe(
      ingredienteReceta => {
        console.dir(ingredienteReceta);
        this.getReceta();
      }
      );
  }


  insertIngredienteProcedimiento(ingredienteProcedimiento: IngredienteProcedimiento) {
    this.ingredienteProcedimientoService.insert(ingredienteProcedimiento)
      .subscribe(
      ingredienteProcedimiento => {
        console.dir(ingredienteProcedimiento);
        this.ingredienteProcedimiento = new IngredienteProcedimiento();
        this.actualizarIngredientesReceta();
      }
      );
  }

}