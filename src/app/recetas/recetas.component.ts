import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../receta.service';
import { Receta } from '../receta';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})

export class RecetasComponent implements OnInit {
  recetas: Receta[];
  receta = new Receta();

  constructor(private recetaService: RecetaService) {
  }

  ngOnInit() {
    this.getRecetas();
  }

  getRecetas() {
    this.recetaService.getRecetas()
      .subscribe(
      recetas => this.recetas = recetas
      );
  }

  insertReceta(receta: Receta) {
    console.dir(this.receta);
    this.recetaService.insertReceta(receta)
      .subscribe(
      receta => {
        this.receta = new Receta();
        this.getRecetas();
      }
      );
  }

  agregarReceta() {
    this.insertReceta(this.receta);
  }

}