import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PrecioBase } from './precio-base';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class PrecioBaseService {

  constructor(private _http: Http) { }

  public getAll(): Observable<PrecioBase[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/precioBase/findAll')
      .map((res: Response) => <PrecioBase[]>res.json());
  }

  public getOne(idx: String): Observable<PrecioBase> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/precioBase/findOne/' + idx)
      .map((res: Response) => <PrecioBase>res.json());
  }

  public insert(precioBase: PrecioBase) {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: head });

    return this._http
      .post(AppSettings.API_ENDPOINT + '/oauth/precioBase/insert', precioBase, options)
      .map((res: Response) => <PrecioBase>res.json());
  }

}
