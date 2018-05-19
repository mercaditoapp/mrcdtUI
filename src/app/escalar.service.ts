import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Escalar } from './escalar';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class EscalarService {

  constructor(private _http: Http) { }

  public getAll(): Observable<Escalar[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/escalar/findAll')
      .map((res: Response) => <Escalar[]>res.json());
  }

  public getOne(idx: String): Observable<Escalar> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/escalar/findOne/' + idx)
      .map((res: Response) => <Escalar>res.json());
  }

  public insert(escalar: Escalar) {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: head });

    return this._http
      .post(AppSettings.API_ENDPOINT + '/oauth/escalar/insert', escalar, options)
      .map((res: Response) => <Escalar>res.json());
  }


}
