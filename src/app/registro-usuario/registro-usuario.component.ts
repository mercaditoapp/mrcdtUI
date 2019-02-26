import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  nombre: string;
  apeidos: string;
  email: string;
  contraseña: string;
  telefono: string;
  Cuidad: string;
  Estado: string;
  sexo;

  constructor() {

    this.nombre= "Lluvia";
    this.apeidos= "Saucedo";
    this.email="lluviaayonectili@gmail.com";
    this.contraseña="29062000";
    this.telefono="5510829238";
    this.Cuidad="Caucun";
    this.Estado="Quintana Roo";
    this.sexo="mujer";
   }

  ngOnInit() {

  }

 
}
