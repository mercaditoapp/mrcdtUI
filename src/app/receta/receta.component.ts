import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecetaService } from '../receta.service';
import { Receta } from '../receta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
  receta = new Receta();

  constructor(
    private recetaService: RecetaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {

    console.dir('Holi');
    console.log(this.route.snapshot.paramMap.get('nombreUrl'));
    console.log(this.route.snapshot.paramMap.get('nombreUrl'));

    this.recetaService.getReceta(this.route.snapshot.paramMap.get('nombreUrl'))
    .subscribe(
    receta => {
        console.log(receta);
        this.receta =receta;
    }
    );

  }

}
