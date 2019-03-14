import { Producto } from "./producto";
import { Equivalencia } from "./equivalencia";
import { Almacen } from "./almacen";

export class ProductoEquivalencia {
    public idx: any;
    public producto: Producto;
    public equivalencia: Equivalencia;
    public almacen: Almacen;

    constructor() {
        this.producto = new Producto();
        this.equivalencia = new Equivalencia();
        this.almacen = new Almacen();
    }

}
