import { Escalar } from './escalar';

export class Equivalencia {
    public escalarA: Escalar; // PRESENTACIÓN DEL USUARIO EN LA RECETA
    public escalarB: Escalar; // SISTEMA -> PEDIDO, ¿CUÁNTO VOY A ENTREGAR DE ESE PRODUCTO?

    constructor() {
        this.escalarA = new Escalar();
        this.escalarB = new Escalar();
    }

}