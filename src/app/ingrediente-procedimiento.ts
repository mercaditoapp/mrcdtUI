import { Producto } from './producto';
import { Procedimiento } from './procedimiento';
import { Unidad } from './unidad';

export class IngredienteProcedimiento {
    public idx: any;
    public cantidad: any;
    public procedimiento: Procedimiento;
    public producto: Producto;
    public unidad: Unidad;

    constructor() {
        this.procedimiento = new Procedimiento();
        this.producto = new Producto();
        this.unidad = new Unidad();

    }
}