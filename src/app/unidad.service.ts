import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Unidad } from './unidad';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class UnidadService {

  constructor(private _http: Http) { }

  public getAll(): Observable<Unidad[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/unidad/findAll')
      .map((res: Response) => <Unidad[]>res.json());
  }

  public getOne(idx: String): Observable<Unidad> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/unidad/findOne/' + idx)
      .map((res: Response) => <Unidad>res.json());
  }

  public insert(unidad: Unidad) {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: head });

    return this._http
      .post(AppSettings.API_ENDPOINT + '/oauth/unidad/insert', unidad, options)
      .map((res: Response) => <Unidad>res.json());
  }


}
