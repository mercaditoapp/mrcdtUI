import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Producto } from './producto';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductosService {

  constructor(private _http: Http) { }

  public getProductos(): Observable<Producto[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/producto/findAll')
      .map((res: Response) => <Producto[]>res.json());
  }

  public findByNombre(producto: Producto) {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: head });

    return this._http
      .post(AppSettings.API_ENDPOINT + '/oauth/producto/findByNombre', producto, options)
      .map((res: Response) => <Producto[]>res.json());
  }

  public insertProducto(producto: Producto) {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: head });

    return this._http
      .post(AppSettings.API_ENDPOINT + '/oauth/producto/insert', producto, options)
      .map((res: Response) => <Producto>res.json());
  }


}
