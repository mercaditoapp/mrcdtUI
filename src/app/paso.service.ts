import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Paso } from './paso';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class PasoService {

  constructor(private _http: Http) { }

  public getAll(): Observable<Paso[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/paso/findAll')
      .map((res: Response) => <Paso[]>res.json());
  }

  public getOne(idx: String): Observable<Paso> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/paso/findOne/' + idx)
      .map((res: Response) => <Paso>res.json());
  }

  public insert(paso: Paso) {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: head });

    return this._http
      .post(AppSettings.API_ENDPOINT + '/oauth/paso/insert', paso, options)
      .map((res: Response) => <Paso>res.json());
  }


}
