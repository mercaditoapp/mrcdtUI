import { Component, OnInit } from '@angular/core';

import { Unidad } from '../unidad';
import { Escalar } from '../escalar';

import { UnidadService } from '../unidad.service';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})

export class CatalogosComponent implements OnInit {

  unidades: Array<Unidad> = JSON.parse('[{"idx":1,"nombre":"GRAMOS","abreviatura":"GR."},{"idx":2,"nombre":"FRASCO","abreviatura":"FRASCO"},{"idx":3,"nombre":"BOLSA","abreviatura":"BOLSA"},{"idx":4,"nombre":"TAZA","abreviatura":"TAZA"},{"idx":5,"nombre":"CUCHARADA","abreviatura":"CUCHARADA"},{"idx":6,"nombre":"REBANADA","abreviatura":"REBANADA"},{"idx":7,"nombre":"PAQUETE","abreviatura":"PAQUETE"},{"idx":8,"nombre":"PIEZA","abreviatura":"PZ."},{"idx":9,"nombre":"REBANADA","abreviatura":"REBANADA"}]');
  unidad = new Array<Unidad> ();
  equivalencas: "Equivalencia"[];
  Equivalencia = new Escalar();
 

  showunidades: boolean;
 
  constructor(private unidadService: UnidadService) {

    this.showunidades = false;

    this.unidadService.getAll()
      .subscribe(
        unidades => {
          this.unidades = unidades

          let unidadPrueba = new Unidad();

          unidadPrueba.idx = [];
          unidadPrueba.nombre = [];
          unidadPrueba.abreviatura = [];
      
          this.unidades.push(unidadPrueba);
      

        }
      );

  
  }

  ngOnInit() {

  }

  showUnits() {
    this.showunidades = !this.showunidades;
  }
  

  
  agregarUnidad () {
    console.log("hola desde agregarUnidad");
    return false;
  }

  


}
