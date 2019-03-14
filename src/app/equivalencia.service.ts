import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Equivalencia } from './equivalencia';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class EquivalenciaService {

  constructor(private _http: Http) { }

  public getAll(): Observable<Equivalencia[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/equivalencia/findAll')
      .map((res: Response) => <Equivalencia[]>res.json());
  }

  public getOne(idx: String): Observable<Equivalencia> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/equivalencia/findOne/' + idx)
      .map((res: Response) => <Equivalencia>res.json());
  }

  public insert(equivalencia: Equivalencia) {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: head });

    return this._http
      .post(AppSettings.API_ENDPOINT + '/oauth/equivalencia/insert', equivalencia, options)
      .map((res: Response) => <Equivalencia>res.json());
  }

}
