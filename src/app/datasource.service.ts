import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DatasourceService {
  baseURL: string = "http://34.210.212.235:8080/mrcdtAPI/oauth/";

  constructor(private _http: Http) {

  }

  public getData(endpoint: string) {
    return this._http.get(this.baseURL + endpoint)
      .map((res: Response) => res.json());
  }

  public postData(endpoint: string, data: any) {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: head });

    return this._http.post(this.baseURL + endpoint, data, options).map((res: Response) => res.json());
  }



  /*   public postData(endpoint: string) {
      this._http.post()
  
  
      return this._http.get(this.baseURL + endpoint)
        .map((res: Response) => res.json());
    } */

}
