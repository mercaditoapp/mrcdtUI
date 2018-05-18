import { Producto } from './producto';
import { Procedimiento } from './procedimiento';
import { Unidad } from './unidad';

export class IngredienteReceta {
    public idx: any;
    public cantidad: any;
    public producto: Producto;
    public unidad: Unidad;

    constructor() {
        this.producto = new Producto();
        this.unidad = new Unidad();

    }
}