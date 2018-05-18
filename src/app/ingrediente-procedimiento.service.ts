import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IngredienteProcedimiento } from './ingrediente-procedimiento';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class IngredienteProcedimientoService {

  constructor(private _http: Http) { }

  public getAll(): Observable<IngredienteProcedimiento[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/ingrediente_procedimiento/findAll')
      .map((res: Response) => <IngredienteProcedimiento[]>res.json());
  }

  public getOne(idx: String): Observable<IngredienteProcedimiento> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/ingrediente_procedimiento/findOne/' + idx)
      .map((res: Response) => <IngredienteProcedimiento>res.json());
  }

  public deleteByIdx(idx: String): any {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/ingrediente_procedimiento/deleteByIdx/' + idx)
      .map((res: Response) => console.dir(res));
  }

  public insert(ingredienteProcedimiento: IngredienteProcedimiento) {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: head });

    return this._http
      .post(AppSettings.API_ENDPOINT + '/oauth/ingrediente_procedimiento/insert', ingredienteProcedimiento, options)
      .map((res: Response) => <IngredienteProcedimiento>res.json());
  }


}
