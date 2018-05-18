import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Receta } from './receta';
import { IngredienteReceta } from './ingrediente-receta';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class RecetaService {

  constructor(private _http: Http) { }

  public getRecetas(): Observable<Receta[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/receta/findAll')
      .map((res: Response) => <Receta[]>res.json());
  }

  public getReceta(nombreUrl: String): Observable<Receta> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/receta/findByNombreUrl/' + nombreUrl)
      .map((res: Response) => <Receta>res.json());
  }

  public actualizarIngredientesReceta(idx: String): Observable<IngredienteReceta[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/receta/actualizarIngredientes/' + idx)
      .map((res: Response) => <IngredienteReceta[]>res.json());
  }

  public deleteByIdx(idx: String): any {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/receta/deleteByIdx/' + idx)
      .map((res: Response) => console.dir(res));
  }

  public insertReceta(receta: Receta) {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: head });

    return this._http
      .post(AppSettings.API_ENDPOINT + '/oauth/receta/insert', receta, options)
      .map((res: Response) => <Receta>res.json());
  }


}
