import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProductoEquivalencia } from './producto-equivalencia';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductoEquivalenciaService {

  constructor(private _http: Http) { }

  public getAll(): Observable<ProductoEquivalencia[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/productoEquivalencia/findAll')
      .map((res: Response) => <ProductoEquivalencia[]>res.json());
  }

  public getOne(idx: String): Observable<ProductoEquivalencia> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/productoEquivalencia/findOne/' + idx)
      .map((res: Response) => <ProductoEquivalencia>res.json());
  }

  public insert(productoEquivalencia: ProductoEquivalencia) {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: head });

    return this._http
      .post(AppSettings.API_ENDPOINT + '/oauth/productoEquivalencia/insert', productoEquivalencia, options)
      .map((res: Response) => <ProductoEquivalencia>res.json());
  }

}
