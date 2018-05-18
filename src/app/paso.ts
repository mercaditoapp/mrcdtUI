import { Procedimiento } from './procedimiento';

export class Paso {
    public idx: any;
    public descripcion: any;
    public indice: any;
    public procedimiento: Procedimiento;

    constructor() { 
        this.procedimiento = new Procedimiento();

    }
}