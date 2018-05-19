import { Producto } from './producto';
import { Escalar } from './escalar';

export class PrecioBase {
    public idx: any;
    public precio: any;
    public producto: Producto;
    public escalar: Escalar;
    
    constructor() { 
        this.escalar = new Escalar();
    }
}
