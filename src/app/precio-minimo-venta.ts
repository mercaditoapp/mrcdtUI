import { Producto } from './producto';
import { Escalar } from './escalar';

export class PrecioMinimoVenta {
    public idx: any;
    public precio: any;
    public producto: Producto;
    public escalarPresentacion: Escalar;
    public escalarContenido: Escalar;
    
    constructor() { 
        this.producto = new Producto();
        this.escalarPresentacion = new Escalar();
        this.escalarContenido = new Escalar();
    }
}
