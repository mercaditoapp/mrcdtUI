import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Procedimiento } from './procedimiento';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class ProcedimientoService {

  constructor(private _http: Http) { }

  public getAll(): Observable<Procedimiento[]> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/procedimiento/findAll')
      .map((res: Response) => <Procedimiento[]>res.json());
  }

  public getOne(idx: String): Observable<Procedimiento> {
    return this._http
      .get(AppSettings.API_ENDPOINT + '/oauth/procedimiento/findOne/' + idx)
      .map((res: Response) => <Procedimiento>res.json());
  }

  public insert(procedimiento: Procedimiento) {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: head });

    return this._http
      .post(AppSettings.API_ENDPOINT + '/oauth/procedimiento/insert', procedimiento, options)
      .map((res: Response) => <Procedimiento>res.json());
  }


}
