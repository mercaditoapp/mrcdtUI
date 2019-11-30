import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../receta.service';
import { Receta } from '../receta';

@Component({
  selector: 'app-recetas-cliente',
  templateUrl: './recetas-cliente.component.html',
  styleUrls: ['./recetas-cliente.component.css']
})
export class RecetasClienteComponent implements OnInit {
  recetas: Receta[];


  constructor(private recetaService: RecetaService) { }

  ngOnInit() {
    this.getRecetas();
  }

  getRecetas() {
    this.recetaService.getRecetas()
      .subscribe(
      recetas => this.recetas = recetas
      );
  }
}
