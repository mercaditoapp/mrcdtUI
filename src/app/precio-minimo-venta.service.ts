import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PrecioMinimoVenta } from './precio-minimo-venta';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class PrecioMinimoVentaService {

  constructor(private _http: Http) { }

  public getAll(): Observable<PrecioMinimoVenta[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/precioMinimoVenta/findAll')
      .map((res: Response) => <PrecioMinimoVenta[]>res.json());
  }

  public getOne(idx: String): Observable<PrecioMinimoVenta> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/precioMinimoVenta/findOne/' + idx)
      .map((res: Response) => <PrecioMinimoVenta>res.json());
  }

  public insert(precioMinimoVenta: PrecioMinimoVenta) {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: head });

    return this._http
      .post(AppSettings.API_ENDPOINT + '/oauth/precioMinimoVenta/insert', precioMinimoVenta, options)
      .map((res: Response) => <PrecioMinimoVenta>res.json());
  }

}
