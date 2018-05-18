import { PrecioMinimoVenta } from './precio-minimo-venta';
import { PrecioBase } from './precio-base';

export class Producto {
    public idx: any;
    public nombre: any;
    public imagen: any;
    public precioMinimoVenta: PrecioMinimoVenta[];
    public precioBase: PrecioBase[];
    
    constructor() { 
    }

}