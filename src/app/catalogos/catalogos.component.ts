import { Component, OnInit } from '@angular/core';

import { Unidad } from '../unidad';
import { Escalar } from '../escalar';
import { Equivalencia } from '../equivalencia';

import { UnidadService } from '../unidad.service';
import { EscalarService } from '../escalar.service';
import { EquivalenciaService } from '../equivalencia.service';


@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})

export class CatalogosComponent implements OnInit {

  unidad = new Unidad();
  unidades: Unidad[];

  escalar = new Escalar();
  escalares: Escalar[];

  equivalencia = new Equivalencia();
  equivalencias: Equivalencia[];

  constructor(private unidadService: UnidadService, private escalarService: EscalarService, private equivalenciaService: EquivalenciaService) { }

  ngOnInit() {
    this.getUnidades();
    this.getEscalares();
    this.getEquivalencias();
  }

  insertUnidad() {
    this.unidadService.insertUnidad(this.unidad)
      .subscribe(
        unidad => {
          console.dir(unidad);
          this.unidad = new Unidad();
          this.getUnidades();
        }
      );
  }

  insertEscalar() {
    this.escalarService.insert(this.escalar)
      .subscribe(
        escalar => {
          console.dir(escalar);
          this.escalar = new Escalar();
          this.getEscalares();
        }
      );
  }

  insertEquivalencia() {
    this.equivalenciaService.insert(this.equivalencia)
      .subscribe(
        equivalencia => {
          console.dir(equivalencia);
          this.equivalencia = new Equivalencia();
          this.getEquivalencias();
        }
      );
  }

  getUnidades() {
    this.unidadService.getAll()
      .subscribe(
        unidades => {
          this.unidades = unidades
          console.dir(unidades);
        }
      );
  }

  getEscalares() {
    this.escalarService.getAll()
      .subscribe(
        escalares => {
          this.escalares = escalares
          console.dir(escalares);
        }
      );
  }

  getEquivalencias() {
    this.equivalenciaService.getAll()
      .subscribe(
        equivalencias => {
          this.equivalencias = equivalencias
          console.dir(equivalencias);
        }
      );
  }
}
