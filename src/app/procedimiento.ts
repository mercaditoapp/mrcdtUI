import { Receta } from './receta';

export class Procedimiento {
    public idx: any;
    public indice: any;
    public nombre: any;
    public nombreTab: any;
    public receta: Receta;

    constructor() { 
        this.receta = new Receta();

    }
}