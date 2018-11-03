import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../productos.service';
import { PrecioMinimoVentaService } from '../precio-minimo-venta.service';
import { PrecioBaseService } from '../precio-base.service';
import { UnidadService } from '../unidad.service';
import { EscalarService } from '../escalar.service';

import { Producto } from '../producto';
import { PrecioMinimoVenta } from '../precio-minimo-venta';
import { PrecioBase } from '../precio-base';
import { Unidad } from '../unidad';
import { Escalar } from '../escalar';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

// BEBE PRODUCTOS
export class ProductosComponent implements OnInit {
  productos: Producto[];
  producto = new Producto();
  precioMinimoVenta = new PrecioMinimoVenta();
  precioBase = new PrecioBase();

  unidades: Unidad[];

  guardarPrecioBase: any;

  // NACE
  constructor(private productosService: ProductosService, private precioMinimoVentaService: PrecioMinimoVentaService,
    private precioBaseService: PrecioBaseService, private unidadService: UnidadService, private escalarService: EscalarService) {
  }

  // ABRE LOS OJOS
  ngOnInit() {
    // REIR
    this.getUnidades();
  }

  getProductos() {
    this.productosService.getProductos()
      .subscribe(
        productos => {
          console.dir(productos);
          this.productos = productos
        }
      );
  }

  getUnidades() {
    this.unidadService.getAll()
      .subscribe(
        unidades => this.unidades = unidades
      );
  }


  insertProducto(producto: Producto) {
    console.dir(this.producto);
    this.productosService.insertProducto(producto)
      .subscribe(
        producto => {
          console.dir(producto);
          this.producto = producto;
          this.precioMinimoVenta.producto = this.producto;

          console.dir("******precioMinimoVenta RESPONSE**********");
          console.dir(this.precioMinimoVenta);

          this.escalarService.insert(this.precioMinimoVenta.escalarPresentacion).subscribe(
            escalarPresentacion => {
              console.dir("******escalarPresentacion RESPONSE**********");
              console.dir(escalarPresentacion);

              this.precioMinimoVenta.escalarPresentacion = escalarPresentacion;

              this.escalarService.insert(this.precioMinimoVenta.escalarContenido).subscribe(
                escalarContenido => {
                  console.dir("******escalarContenido RESPONSE**********");
                  console.dir(escalarContenido);

                  this.precioMinimoVenta.escalarContenido = escalarContenido;


                  console.dir(this.precioMinimoVenta);

                  this.precioMinimoVentaService.insert(this.precioMinimoVenta).subscribe(
                    precioMinimoVenta => {
                      console.dir(precioMinimoVenta);
                    }
                  )
                }
              )

            }
          )

          if (this.guardarPrecioBase) {

            console.dir("******ESCALAR**********");
            console.dir(this.precioBase.escalar);

            this.escalarService.insert(this.precioBase.escalar).subscribe(
              escalar => {
                console.dir("******ESCALAR RESPONSE**********");
                console.dir(escalar);

                this.precioBase.escalar = escalar;
                this.precioBase.producto = this.producto;

                console.dir("******PRECIO BASE**********");
                console.dir(this.precioBase);

                this.precioBaseService.insert(this.precioBase).subscribe(
                  precioBase => {
                    console.dir("******PRECIO RESPONSE**********");
                    console.dir(precioBase);

                    this.precioBase = precioBase;
                  }
                )

              }
            )
          }
        }
      );
  }

  agregarProducto() {
    console.dir(this.guardarPrecioBase);
    this.insertProducto(this.producto);
  }

}