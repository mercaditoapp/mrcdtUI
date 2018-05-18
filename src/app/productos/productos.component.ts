import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { PrecioMinimoVentaService } from '../precio-minimo-venta.service';
import { Producto } from '../producto';
import { PrecioMinimoVenta } from '../precio-minimo-venta';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  productos: Producto[];
  producto = new Producto();
  precioMinimoVenta = new PrecioMinimoVenta();

  constructor(private productosService: ProductosService, private precioMinimoVentaService: PrecioMinimoVentaService) {
  }

  ngOnInit() {
    this.getProductos();
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

  insertProducto(producto: Producto) {
    console.dir(this.producto);
    this.productosService.insertProducto(producto)
      .subscribe(
        producto => {
          console.dir(producto);
          this.producto = producto;
          this.precioMinimoVenta.producto = this.producto;

          this.precioMinimoVenta.escalarContenido.idx = 1;
          this.precioMinimoVenta.escalarPresentacion.idx = 1;

          console.dir(this.precioMinimoVenta);

          this.precioMinimoVentaService.insert(this.precioMinimoVenta).subscribe(
            precioMinimoVenta => {
              console.dir(precioMinimoVenta);
            }
          )
        }
      );
  }

  agregarProducto() {
    this.insertProducto(this.producto);
  }

}